import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {Grocery} from "./types/Grocery.ts";
import {Route, Routes} from "react-router-dom";
import AllProductsPage
    from "./components/AllProductsPage.tsx";
import ShoppingListPage
    from "./components/ShoppingListPage.tsx";
import ProtectedRoute
    from "./components/ProtectedRoute.tsx";
import NavBar from "./components/NavBar.tsx";


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

    const [userName, setUserName] = useState<string>("anonymousUser")

    useEffect(() => {
        axios.get("/api/groceries/auth/me")
            .then(response => setUserName(response.data.userName))
    }, [userName]);

    function setUserNameToAnonymous():void{
        setUserName("anonymousUser")
    }

    return (
        <div id={"app"}>
            <NavBar loggedIn={userName !== "anonymousUser" && userName!=""} setUserNameToAnonymous={setUserNameToAnonymous}/>
            <div id={"app-space"}></div >
            <Routes>
                <Route path={"/" +
                    ""}
                       element={<AllProductsPage
                           groceries={groceries}
                           updateQuantity={updateQuantity}
                       />}/>
                <Route element={<ProtectedRoute userName={userName}/>}>
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
        </div>
    )
}

export default App
