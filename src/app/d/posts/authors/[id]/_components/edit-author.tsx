'use client'

import { startTransition, useActionState } from 'react'

import { updateAuthor, deleteAuthor } from '~/server/actions/post/author'

import FormGroup from '~/app/d/_components/form/form-group'
import FormGroups from '~/app/d/_components/form/form-groups'

import type { IAuthor, WithId } from '~/server/db/schema'

interface IEditAuthorPageProps {
  author: WithId<IAuthor>
}

export default function EditAuthorPage({ author }: IEditAuthorPageProps) {
  const formData = new FormData()
  formData.set('name', author.name ?? '')
  formData.set('image', author.image ?? '')
  formData.set('bio', author.bio ?? '')

  const [state, formAction, pending] = useActionState(updateAuthor.bind(null, author._id), {
    formData,
  })

  const [deleteState, deleteAction, deletePending] = useActionState(
    deleteAuthor.bind(null, author._id),
    null,
  )

  return (
    <form action={formAction}>
      <FormGroups>
        <FormGroup>
          <label htmlFor="name">
            <small>Name</small>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={state?.formData?.get('name')?.toString()}
          />
          {state?.fieldErrors?.name?.map((msg, i) => (
            <small key={i} className="fw-500 cl-error">
              {msg}
            </small>
          ))}
        </FormGroup>

        <FormGroup>
          <label htmlFor="image">
            <small>Image</small>
          </label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={state?.formData?.get('image')?.toString()}
          />
          {state?.fieldErrors?.image?.map((msg, i) => (
            <small key={i} className="fw-500 cl-error">
              {msg}
            </small>
          ))}
        </FormGroup>

        <FormGroup>
          <label htmlFor="bio">
            <small>Bio</small>
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={7}
            defaultValue={state?.formData?.get('bio')?.toString()}
          />
          {state?.fieldErrors?.bio?.map((msg, i) => (
            <small key={i} className="fw-500 cl-error">
              {msg}
            </small>
          ))}
        </FormGroup>
      </FormGroups>

      <div className="flex fx-a-center fx-j-space-between">
        <button type="submit" disabled={pending}>
          {pending ? 'Saving...' : 'Save Author'}
        </button>

        <button
          type="button"
          className="cl-error"
          onClick={() => startTransition(deleteAction)}
          disabled={deletePending}
        >
          {deletePending ? 'Deleting...' : 'Delete Author'}
        </button>
      </div>

      <div className="mt-100">
        {state?.error ? <small className="fw-500 cl-error">{state.error}</small> : null}
      </div>
    </form>
  )
}
