// TODO: make this use `with` when you move to node 20
function replaceItemOnListWith({
  list,
  newItem,
  index,
}: {
  list: Array<any>;
  newItem: any;
  index: number;
}): Array<any> {
  return list.map((oldItem, currentIndex) => (currentIndex === index ? newItem : oldItem));
}

export { replaceItemOnListWith };
