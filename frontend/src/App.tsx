import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {Grocery} from "./types/Grocery.ts";
import {Route, Routes} from "react-router-dom";
import AllProductsPage
    from "./components/AllProductsPage.tsx";
import ShoppingListPage
    from "./components/ShoppingListPage.tsx";
import Login from "./components/Login.tsx";
import ProtectedRoute
    from "./components/ProtectedRoute.tsx";
import Navbar from "./components/Navbar.tsx";


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

    function login() {
        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080' : window.location.origin
        window.open(host + '/oauth2/authorization/github', '_self')
    }

    function logout() {
        setUserName("anonymousUser")
        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080' : window.location.origin
        window.open(host + '/api/auth/logout', '_self')
    }

    const [userName, setUserName] = useState<string>("")
    useEffect(() => {
        axios.get("/api/groceries/auth/me")
            .then(response => setUserName(response.data))
    }, [userName]);


    return (
        <>
            <Navbar login={login} logout={logout} loggedIn={userName !== "anonymousUser" && userName!=""}/>
            <Routes>
                <Route path={"/"} element={<Login
                    login={login} logout={logout} loggedIn={userName !== "anonymousUser" && userName!=""}/>}/>
                <Route element={<ProtectedRoute userName={userName}/>}>
                    <Route path={"/allproducts"}
                           element={<AllProductsPage
                               groceries={groceries}
                               updateQuantity={updateQuantity}
                           />}/>
                    <Route path={"/shoppinglist"}
                           element={<ShoppingListPage
                               groceries={groceries}
                               updateQuantity={updateQuantity}
                               />}/>
                </Route>
            </Routes>
            {userName !== "anonymousUser" && userName != "" ?
                <p>You are logged in as {userName}</p> :
                <p>You are not logged in</p>}
        </>
    )
}

export default App
