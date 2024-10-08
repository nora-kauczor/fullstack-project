import {Grocery} from "../types/Grocery.ts";
import './GroceryCard.css'
import { useState} from "react";

type Props = {
    grocery: Grocery,
    updateQuantity: (groceryId:string, newQuantity:number) => void,
    isShoppingList: boolean
}

export default function GroceryCard(props:Readonly<Props>) {
    const [quantityDisplay, setQuantityDisplay] = useState<number>(props.grocery.quantity)
    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        setQuantityDisplay(parseInt(event.target.value))
        props.updateQuantity(props.grocery.id, parseInt(event.target.value))
    }
    function handleClick(){
        console.log(props.isShoppingList)
    }
    function getButtonText(){
        return props.isShoppingList ? "remove" : "add"
    }
    return (
        <article id={"grocery-card"}>
            <input id={"grocery-card-counter"} value={quantityDisplay} onChange={handleChange} type={"number"} min={"0"} max={"100"}
                   step={"1"}/>
            <h3 id={"grocery-card-name"}>{props.grocery.name}</h3>
            <p id={"grocery-card-price"}>{props.grocery.price} €</p>
            <button onClick={handleClick} id={"grocery-card-button"}>
                {getButtonText()}
            </button>
        </article>
    )
}