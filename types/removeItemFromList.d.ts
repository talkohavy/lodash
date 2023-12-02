/**
 * @param {{list: Array<any>, filterBy: (item: any) => boolean}} props
 * @returns {Array<any>}
 */
export function removeItemFromList({ list, filterBy }: {
    list: Array<any>;
    filterBy: (item: any) => boolean;
}): Array<any>;
