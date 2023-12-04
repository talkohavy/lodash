function removeItemFromList({ list, filterBy }: { list: Array<any>; filterBy: (item: any) => boolean }): Array<any> {
  return list.filter(filterBy);
}

export { removeItemFromList };
