import {Grocery} from "../types/Grocery.ts";

type Props = {
    grocery: Grocery
}

export default function GroceryCard(props:Props){
    return (
        <article>
            <h3>{props.grocery.name}</h3>
            <p>{props.grocery.price} €</p>
        </article>
    )
}