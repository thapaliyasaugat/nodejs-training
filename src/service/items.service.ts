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
//add
export const add = async (item: Items) => {
    mockItems.push(item);
    return Promise.resolve(item)
}

// delete item by id
export const DeleteById = async (id: Number) => {
    // console.log(id)
    const item = mockItems.filter(item => item.id !== id);
    if (item) {
        return Promise.resolve(item);
    } else {
        return Promise.resolve(undefined)
    }
}


// delete item by id
export const PutItem = async (id: number, update: Items) => {
    const item = mockItems.find(item => item.id === id);
    if (item) {
        const updated = { ...item, ...update }
        return Promise.resolve(updated);
    } else {
        // return Promise.resolve("Items doesn't exit")
        return Promise.resolve(undefined)
    }
}