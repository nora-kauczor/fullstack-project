import {Grocery} from "../types/Grocery.ts";
import GroceryList from "./GroceryList.tsx";
import {useEffect, useState} from "react";

type Props = {
    groceries: Grocery[],
    updateQuantity: (groceryId: string, newQuantity: number) => void
}
export default function ShoppingListPage(props: Readonly<Props>) {
    const [total, setTotal] = useState<number>(0)
    useEffect(() => {
        setTotal(calculateTotal())
    }, [props.groceries])

    function calculateTotal(): number {
        return props.groceries.reduce((sum, grocery) => sum + grocery.price * grocery.quantity, 0)
    }

    return (<div id="all-products-page">
            <GroceryList
                groceries={props.groceries.filter(grocery => grocery.quantity > 0)}
                isShoppingList={true}
                updateQuantity={props.updateQuantity}/>
            <p>{total.toFixed(2)} €</p>
        </div>
    )
}