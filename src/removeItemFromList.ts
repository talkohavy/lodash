type RemoveItemFromListProps<T> = {
  list: Array<T>;
  filterBy: (item: T) => boolean;
};

function removeItemFromList<T>(props: RemoveItemFromListProps<T>): Array<T> {
  const { list, filterBy } = props;

  return list.filter(filterBy);
}

export { removeItemFromList };
