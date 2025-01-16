type RemoveItemFromListByIndexProps<T> = {
  list: Array<T>;
  index: number;
};

// TODO: make this toSpliced when you move to node 20
export function removeItemFromListByIndex<T = any>(props: RemoveItemFromListByIndexProps<T>): Array<T> {
  const { list, index } = props;

  const newList = [...list];
  return newList.splice(index, 1);
}
