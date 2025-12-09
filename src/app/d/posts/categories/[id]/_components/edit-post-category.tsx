'use client'

import { startTransition, useActionState } from 'react'

import { updatePostCategory, deletePostCategory } from '~/server/actions/post/category'

import FormGroup from '~/app/d/_components/form/form-group'
import FormGroups from '~/app/d/_components/form/form-groups'

import type { IPostCategory, WithId } from '~/server/db/schema'

interface IEditPostCategoryPageProps {
  category: WithId<IPostCategory>
}

export default function EditPostCategoryPage({ category }: IEditPostCategoryPageProps) {
  const [state, formAction, pending] = useActionState(updatePostCategory.bind(null, category._id), {
    label: category.label,
    error: undefined,
  })

  const [deleteState, deleteAction, deletePending] = useActionState(
    deletePostCategory.bind(null, category._id),
    { error: undefined },
  )

  return (
    <form action={formAction}>
      <FormGroups>
        <FormGroup>
          <label htmlFor="label">
            <small>Label</small>
          </label>
          <input
            type="text"
            id="label"
            name="label"
            defaultValue={state.label}
            required
            autoFocus
          />

          {state.error?.label == null
            ? null
            : state.error.label.map(err => (
                <p key={err} className="my-25 fs-50 fw-500 cl-error">
                  {err}
                </p>
              ))}
        </FormGroup>
      </FormGroups>

      <div className="flex fx-a-center fx-j-space-between">
        <button type="submit" disabled={pending}>
          {pending ? 'Saving...' : 'Save Category'}
        </button>

        <button
          type="button"
          className="cl-error"
          onClick={() => startTransition(deleteAction)}
          disabled={deletePending}
        >
          {deletePending ? 'Deleting...' : 'Delete Category'}
        </button>
      </div>

      {deleteState.error == null ? null : (
        <p className="my-25 fs-50 fw-500 cl-error">{deleteState.error}</p>
      )}
    </form>
  )
}
