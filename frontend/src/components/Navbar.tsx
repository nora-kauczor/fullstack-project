import {Link} from "react-router-dom";
import Login from "./Login.tsx";

type Props = {
    login: () => void,
    logout: () => void,
    loggedIn: boolean
}
export default function Navbar (props:Props){
   return(
        <>
            <ul>
                <li> <Login login={props.login} logout={props.logout} loggedIn={props.loggedIn}/></li>
                <li> <Link to={"/shoppinglist"}> Shopping list </Link></li>
                <li> <Link to={"/allproducts"}> All Products </Link></li>
            </ul>
        </>
    )

}