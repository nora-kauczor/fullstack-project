import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {Grocery} from "./types/Grocery.ts";
import {Route, Routes} from "react-router-dom";
import AllProductsPage
    from "./components/AllProductsPage.tsx";
import ShoppingListPage
    from "./components/ShoppingListPage.tsx";


function App() {

    const [groceries, setGroceries] = useState<Grocery[]>([])
    const getAllGroceries = () => {
        axios.get("/api/groceries")
            .then(response => setGroceries(response.data))
            .catch(error => console.error(error))
    }
    useEffect(() => getAllGroceries(), [])

    const updateQuantity = (groceryId: string, newQuantity: number) => {
        axios.put("/api/groceries/update/" + groceryId + "?quantity=" + newQuantity)
            .then(() => getAllGroceries())
            .catch(error => console.error(error))
    }

    const [userDisplay, setUserDisplay] = useState<string>("")

    function login() {
        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080' : window.location.origin
        window.open(host + '/oauth2/authorization/github', '_self')
    }

    useEffect(() => {
        axios.get("/api/groceries/auth/me")
            .then(response => setUserDisplay(response.data))
    }, []);


    return (
        <>
            <Routes>
                <Route path={"/"}
                       element={<AllProductsPage
                           groceries={groceries}
                           updateQuantity={updateQuantity}/>}/>
                {userDisplay.length === 0 ?
                    <Route path={"/shoppinglist"}
                           element={<h2>Please log
                               in to see the shopping list.</h2>}/> :
                    <Route path={"/shoppinglist"}
                           element={<ShoppingListPage
                               groceries={groceries}
                               updateQuantity={updateQuantity}/>}/>}
            </Routes>
            {userDisplay.length === 0 &&
                <button onClick={login}>Login</button>}
            {userDisplay.length > 0 &&
                <p>You are logged in as {userDisplay}</p>}
        </>
    )
}

export default App
