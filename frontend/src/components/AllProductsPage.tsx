import GroceryList from "./GroceryList.tsx";
import {Grocery} from "../types/Grocery.ts";

type Props ={
    groceries: Grocery[]
}
export default function AllProductsPage(props:Props){
    return (
        <>
            <GroceryList groceries={props.groceries}/>
        </>
    )
}