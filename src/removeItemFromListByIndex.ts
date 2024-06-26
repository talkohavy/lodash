type RemoveItemFromListByIndexProps<T> = {
  list: Array<T>;
  index: number;
};

// TODO: make this toSpliced when you move to node 20
function removeItemFromListByIndex<T>(props: RemoveItemFromListByIndexProps<T>): Array<T> {
  const { list, index } = props;

  const newList = [...list];
  return newList.splice(index, 1);
}

export { removeItemFromListByIndex };
