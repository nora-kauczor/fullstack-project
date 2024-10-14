import {Grocery} from "../types/Grocery.ts";
import GroceryCard from "./GroceryCard.tsx";
import './GroceryList.css'
type Props = {
    groceries: Grocery[],
    updateQuantity: (groceryId:string, newQuantity:number) => void,
    isShoppingList: boolean
}

export default function GroceryList(props:Readonly<Props>){
    return (
        <div id="grocery-list">
            {props.groceries
                .map(grocery => <GroceryCard grocery={grocery} key={grocery.id} isShoppingList={props.isShoppingList} updateQuantity={props.updateQuantity}/>)}
        </div>
    )
}