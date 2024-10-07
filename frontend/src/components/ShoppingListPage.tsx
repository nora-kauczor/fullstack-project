import {Grocery} from "../types/Grocery.ts";
import GroceryList from "./GroceryList.tsx";

type Props = {
    groceries: Grocery[],
}
export default function ShoppingListPage(props: Readonly<Props>) {

    return (<div id="all-products-page">
            <GroceryList groceries={props.groceries} selected={true}/>
        </div>
            )
   }