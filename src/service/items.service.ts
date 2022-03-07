import { Items } from "../contracts/items";
import { mockItems } from "../mock/mockItems"

//fetch all items
export const findAll = async () => {
    // return mockItems;
    return Promise.resolve(mockItems)
}
// fetch all item by id
export const findById = async (id: Number) => {
    const item = mockItems.find(item => item.id === id);
    return Promise.resolve(item);
}

// delete item by id
export const DeleteById = async (id: Number) => {
    // console.log(id)
    const item = mockItems.filter(item => item.id !== id);
    return Promise.resolve(item);
}


// delete item by id
export const PutItem = async (id: number, update: Object) => {
    const item = mockItems.find(item => item.id === id);
    const updated = { ...item, ...update }
    return Promise.resolve(updated);
}