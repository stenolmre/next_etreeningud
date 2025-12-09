import { cx } from '~/lib/cx'

export default function FormGroups(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx('my-100 flex fx-d-column fx-g-y-100', props.className)} {...props}>
      {props.children}
    </div>
  )
}
