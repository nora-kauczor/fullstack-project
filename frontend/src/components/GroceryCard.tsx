import {Grocery} from "../types/Grocery.ts";
import './GroceryCard.css'
import { useState} from "react";

type Props = {
    grocery: Grocery,
    updateQuantity: (groceryId:string, newQuantity:number) => void,
    isShoppingList: boolean
}

export default function GroceryCard(props:Readonly<Props>) {
    const [quantityDisplay, setQuantityDisplay] = useState<number>(props.isShoppingList ? props.grocery.quantity : 0)


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
            props.updateQuantity(props.grocery.id, props.grocery.quantity + quantityDisplay)
        }
    }
    function getButtonText(){
        return props.isShoppingList ? "remove" : "add"
    }
    return (
        <article id={"grocery-card"}>
            <div id={"regular-content"}>
                <input type={"number"}  id={"grocery-card-counter"} value={quantityDisplay} onChange={handleChange}
                   min={"0"} max={"100"}
                   step={"1"}/>
                <h3 id={"grocery-card-name"}>{props.grocery.name}</h3>
                <p id={"grocery-card-price"}>{props.grocery.price.toFixed(2)} €</p>
                <button onClick={handleClick} id={"grocery-card-button"}>
                    {getButtonText()}
                </button>
            </div>
            {!props.isShoppingList && props.grocery.quantity > 0
                ? <p className={"oldquantity"}> Already {props.grocery.quantity} in the list.</p>
                : <p className={"oldquantity"}></p> }
        </article>
    )
}