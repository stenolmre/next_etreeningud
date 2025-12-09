'use client'

import { useActionState } from 'react'

import { insertPostCategory } from '~/server/actions/post/category'

import FormGroup from '~/app/d/_components/form/form-group'
import FormGroups from '~/app/d/_components/form/form-groups'

export default function CreatePostCategoryPage() {
  const [state, formAction, pending] = useActionState(insertPostCategory, {
    error: { label: undefined },
  })

  return (
    <>
      <h1>Create Blog Category</h1>

      <form action={formAction}>
        <FormGroups>
          <FormGroup>
            <label htmlFor="label">
              <small>Label</small>
            </label>
            <input type="text" id="label" name="label" required />

            {state.error?.label == null
              ? null
              : state.error.label.map(err => (
                  <p key={err} className="mt-25 mb-unset fs-50 fw-500 cl-error">
                    {err}
                  </p>
                ))}
          </FormGroup>
        </FormGroups>

        <button type="submit" disabled={pending}>
          {pending ? 'Creating...' : 'Create Category'}
        </button>
      </form>
    </>
  )
}
