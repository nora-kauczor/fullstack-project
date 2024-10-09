import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {Grocery} from "./types/Grocery.ts";
import {Route, Routes} from "react-router-dom";
import AllProductsPage
    from "./components/AllProductsPage.tsx";
import ShoppingListPage
    from "./components/ShoppingListPage.tsx";
import {b} from "vite/dist/node/types.d-aGj9QkWt";

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

    function handleClickTestSecurity(){
        axios.get("/api/groceries/update/*")
            .then(response => console.log(response.data))
            .catch(error => console.error(error))
    }

    function login():void{
        const host:boolean = window.location.host === 'localhost:5173' ? 'http://localhost:8080' : window.location.origin
        window.open(host+'/oauth2/authorization/github', '_self')
    }




    function getMe(){
        axios.get("/api/groceries/auth/me")
    }

    return (
        <>
            <Routes>
                <Route path={"/"} element={<AllProductsPage
                    groceries={groceries}
                    updateQuantity={updateQuantity}/>}/>
                <Route path={"/shoppinglist"}
                       element={<ShoppingListPage
                           groceries={groceries}
                           updateQuantity={updateQuantity}/>}/>
            </Routes>
            <button onClick={handleClickTestSecurity}></button>
            <button>Login</button>
            <button>Me</button>
        </>
    )
}

export default App
