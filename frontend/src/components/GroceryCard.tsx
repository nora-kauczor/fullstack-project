import {Grocery} from "../types/Grocery.ts";
import './GroceryCard.css'

type Props = {
    grocery: Grocery
}

export default function GroceryCard(props:Readonly<Props>) {


    return (
        <article id={"grocery-card"}>
            <input id={"grocery-card-counter"} type={"number"} min={"0"} max={"100"}
                   step={"1"}/>
            <h3 id={"grocery-card-name"}>{props.grocery.name}</h3>
            <p id={"grocery-card-price"}>{props.grocery.price} €</p>
            <button id={"grocery-card-button"}>add</button>
        </article>
    )
}