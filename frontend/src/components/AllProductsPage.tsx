import GroceryList from "./GroceryList.tsx";
import {Grocery} from "../types/Grocery.ts";

type Props = {
    groceries: Grocery[],
    updateQuantity: (groceryId: string, newQuantity: number) => void
}
export default function AllProductsPage(props: Readonly<Props>) {
    return (<div id="all-products-page">
            <GroceryList groceries={props.groceries}
                         isShoppingList={false}
                         updateQuantity={props.updateQuantity}/>
        </div>
    )
}