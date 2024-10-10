import {Link} from "react-router-dom";

export default function Navbar (){
   return(
        <>
            <ul>
                <li> <Link to={"/shoppinglist"}> Shopping list </Link></li>
                <li> <Link to={"/allproducts"}> All Products </Link></li>
            </ul>
        </>
    )

}