import {Grocery} from "../types/Grocery.ts";
import GroceryCard from "./GroceryCard.tsx";

type Props = {
    groceries: Grocery[],
    selected: boolean
}

export default function GroceryList(props:Readonly<Props>){
    return (
        <div id="grocery-list">
            {props.groceries.filter(grocery => props.selected ? grocery.quantity > 0 : grocery.quantity == 0)
                .map(grocery => <GroceryCard grocery={grocery} key={grocery.id}/>)}
        </div>
    )
}