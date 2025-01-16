type ReplaceItemOnListWithProps<T> = {
  list: Array<T>;
  newItem: T;
  index: number;
};

// TODO: make this use `with` when you move to node 20
export function replaceItemOnListWith<T>(props: ReplaceItemOnListWithProps<T>): Array<T> {
  const { list, newItem, index } = props;

  return list.map((oldItem, currentIndex) => (currentIndex === index ? newItem : oldItem));
}
