import { cx } from '~/lib/cx'

export default function FormGroup(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx('form-group flex fx-d-column fx-g-y-25', props.className)} {...props}>
      {props.children}
    </div>
  )
}
