'use client'

import { useActionState } from 'react'

import { insertAuthor } from '~/server/actions/post/author'

import FormGroup from '~/app/d/_components/form/form-group'
import FormGroups from '~/app/d/_components/form/form-groups'

export default function AuthorForm() {
  const [state, submitAction, pending] = useActionState(insertAuthor, null)

  return (
    <form action={submitAction}>
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

      <button type="submit" disabled={pending}>
        {pending ? 'Creating...' : 'Create Author'}
      </button>

      <div className="mt-100">
        {state?.error ? <small className="fw-500 cl-error">{state.error}</small> : null}
      </div>
    </form>
  )
}
