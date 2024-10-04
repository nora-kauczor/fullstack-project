import {Grocery} from "../types/Grocery.ts";
import GroceryCard from "./GroceryCard.tsx";

type Props = {
    groceries: Grocery[]
}

export default function GroceryList(props:Props){
    return (
        <>
            {props.groceries.map(grocery => <GroceryCard grocery={grocery}/>)}
        </>
    )
}