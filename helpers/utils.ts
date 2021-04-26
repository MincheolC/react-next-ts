type ArrayHasCreatedAt = {
  createdAt: number
}

export function getLatest<T extends ArrayHasCreatedAt>(
  arr: Array<T>,
  num: number = arr.length
): Array<T> {
  return [...arr].sort((a, b) => b.createdAt - a.createdAt).slice(0, num)
}
