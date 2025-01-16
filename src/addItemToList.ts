type addItemToListProps<T> = { list: Array<T>; newItem: T };

export function addItemToList<T>(props: addItemToListProps<T>) {
  const { list, newItem } = props;

  return list.concat(newItem);
}
