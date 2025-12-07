import { redirect } from 'next/navigation'

import { authOptions } from '~/lib/auth'
import { getSession } from '~/server/session'

import AuthButton from '~/auth/_components/auth-button'
// import Logo from '~/_components/logo'

export default async function AuthPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const session = await getSession()
  const providers = authOptions.providers
  const error = (await searchParams).error

  if (session?.user) {
    redirect('/')
  }

  function getErrorMessage() {
    // https://next-auth.js.org/configuration/pages#sign-in-page
    switch (error) {
      case 'Signin':
        return 'Sign in failed'
      case 'OAuthSignin':
        return 'OAuth sign in failed'
      case 'OAuthCallback':
        return 'OAuth callback failed'
      case 'OAuthCreateAccount':
        return 'OAuth create account failed'
      case 'EmailCreateAccount':
        return 'Email create account failed'
      case 'Callback':
        return 'An error occurred'
      case 'OAuthAccountNotLinked':
        return 'Account not linked'
      case 'EmailSignin':
        return 'Email or password is incorrect'
      case 'CredentialsSignin':
        return 'Credentials are incorrect'
      case 'CheckEmail':
        return 'Check your email'

      // https://next-auth.js.org/configuration/pages#error-page
      case 'Configuration':
        return 'System error. Please contact support.'
      case 'AccessDenied':
        return 'Access denied. Please check your credentials.'
      case 'Verification':
        return 'Verification error. Please check your verification code.'

      default:
        return 'Oops! Something went wrong, please try again.'
    }
  }

  return (
    <div className="full-h flex fx-a-center fx-j-center">
      <article
        className="fill-w flex fx-d-column fx-g-y-50 tx-center"
        style={{ maxWidth: '20rem' }}
      >
        {/* <Logo /> */}
        <h4 className="fs-50">
          Log in or Sign up <br /> to continue
        </h4>
        <div className="flex fx-a-center fx-g-x-50">
          {Object.values(providers).map(provider => (
            <AuthButton key={provider.id} id={provider.id} name={provider.name} />
          ))}
        </div>

        {error ? <div className="mt-50 fs-50 fw-500 cl-error">{getErrorMessage()}</div> : null}
      </article>
    </div>
  )
}
