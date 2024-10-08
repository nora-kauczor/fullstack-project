import GroceryList from "./GroceryList.tsx";
import {Grocery} from "../types/Grocery.ts";

type Props = {
    groceries: Grocery[]
}
export default function AllProductsPage(props:Readonly<Props>){
    return (<div id="all-products-page">
            <GroceryList groceries={props.groceries}/>
        </div>
    )
}