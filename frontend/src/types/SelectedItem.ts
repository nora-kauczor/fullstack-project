import {Grocery} from "./Grocery.ts";

export type SelectedItem = {
    id: string,
    groceryId: string,
    quantity: number
}

export type SelectedGrocery = {
    id?: string,
    groceryId: string,
    groceryName: string,
    groceryPrice: number,
    quantity?: number
}


// export type SelectedGrocery = {
//     id: string,
//     grocery: Grocery,
//     quantity: number
// }

export type Grocery = {
    id: string,
    name: string,
    price: number,
    quantity: undefined
}