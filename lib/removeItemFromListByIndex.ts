// TODO: make this toSpliced when you move to node 20
function removeItemFromListByIndex({ list, index }: { list: Array<any>; index: number }): Array<any> {
  const newList = [...list];
  return newList.splice(index, 1);
}

export { removeItemFromListByIndex };
