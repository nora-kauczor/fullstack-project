import {Grocery} from "../types/Grocery.ts";
import GroceryCard from "./GroceryCard.tsx";

type Props = {
    groceries: Grocery[],
    updateQuantity: (groceryId:string, newQuantity:number) => void
}

export default function GroceryList(props:Readonly<Props>){
    return (
        <div id="grocery-list">
            {props.groceries
                .map(grocery => <GroceryCard grocery={grocery} key={grocery.id} updateQuantity={props.updateQuantity}/>)}
        </div>
    )
}