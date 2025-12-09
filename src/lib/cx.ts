export function cx(...classes: (string | Record<string, boolean> | undefined)[]): string {
  const list = []

  for (const item of classes) {
    if (item == null) {
      continue
    }

    if (typeof item === 'string') {
      list.push(item)
      continue
    }

    for (const _class in item) {
      if (item[_class]) {
        list.push(_class)
      }
    }
  }

  return list.join(' ')
}
