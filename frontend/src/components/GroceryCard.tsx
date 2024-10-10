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
        const newValue = parseInt(event.target.value)
        setQuantityDisplay(newValue)
        if (props.isShoppingList){
            props.updateQuantity(props.grocery.id, newValue)
        }
    }
    function handleClick():void{
        if (props.isShoppingList){
            props.updateQuantity(props.grocery.id, 0)
        } else {
            props.updateQuantity(props.grocery.id, quantityDisplay)
        }
    }
    function getButtonText(){
        return props.isShoppingList ? "remove" : "add"
    }
    return (
        <article id={"grocery-card"}>
            <input type={"number"}  id={"grocery-card-counter"} value={quantityDisplay} onChange={handleChange}
                   min={"0"} max={"100"}
                   step={"1"}/>
            <h3 id={"grocery-card-name"}>{props.grocery.name}</h3>
            <p id={"grocery-card-price"}>{props.grocery.price} €</p>
            <button onClick={handleClick} id={"grocery-card-button"}>
                {getButtonText()}
            </button>
        </article>
    )
}