import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

import { authenticate } from '~/server/session'

import type { DefaultSession, NextAuthOptions } from 'next-auth'
import type { WithId } from 'mongodb'
import type { IUser } from '~/server/db/schema'

declare module 'next-auth' {
  interface Session {
    user: WithId<IUser> & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: WithId<IUser> & DefaultSession['user']
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    Google({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
  ],
  callbacks: {
    async jwt({ token, trigger }) {
      // if user is stored in token, return it, if not and has email (login) then authenticate
      // also re-authenticate on 'update' trigger to get latest user data
      if (trigger === 'update' || (token.user == null && token.email != null)) {
        const user = await authenticate(token)
        if (user) {
          token.user = user
        }
      }
      return token
    },
    async session({ session, token }) {
      session.user = token.user
      return session
    },
  },
  pages: {
    signIn: '/auth',
    error: '/auth',
  },
}
