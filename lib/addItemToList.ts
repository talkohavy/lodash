function addItemToList({ list, newItem }: { list: Array<any>; newItem: any }): Array<any> {
  return list.concat(newItem);
}

export { addItemToList };
