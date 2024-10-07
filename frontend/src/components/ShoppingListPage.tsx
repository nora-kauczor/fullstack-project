import GroceryList from "./GroceryList.tsx";
import {Grocery} from "../types/Grocery.ts";
import {SelectedItem} from "../types/SelectedItem.ts";

type Props = {
    groceries: Grocery[],
    selectedItems: SelectedItem[]
}
export default function ShoppingListPage(props: Readonly<Props>) {

    // function getGroceryById(id: string): Grocery {
    //     const searchedGrocery = props.groceries.find(grocery => grocery.id === id)
    //     if (!searchedGrocery) {
    //         return
    //     }
    //     return searchedGrocery
    // }

    // function getShoppingListWithGroceryObjects() {
    //     const arrayOfIds:String[] = props.selectedItems.map(item => item.groceryId);
    //
    //     props.selectedItems.map(item => {
    //        return item.groceryId, getGroceryById(item.groceryId).name, getGroceryById(item.groceryId).price
    //     })
    // }

    return (
        <div id="shopping-list-page">
            <GroceryList groceries={}/>
            <p></p>
        </div>
    )
}