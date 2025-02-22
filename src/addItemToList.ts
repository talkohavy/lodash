export type AddItemToListProps<T> = {
  list: Array<T>;
  newItem: T;
};

export function addItemToList<T = any>(props: AddItemToListProps<T>) {
  const { list, newItem } = props;

  return list.concat(newItem);
}
