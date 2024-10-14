import {Link} from "react-router-dom";
import './NavBar.css'
import LogoutButton from "./LogoutButton.tsx";

type Props = {
    setUserNameToAnonymous: () => void,
}
export default function NavBar(props: Props) {
    return (
        <ul>
            <li><Link to={"/shoppinglist"}
                      className={"login-link"}> Shopping
                list </Link></li>
            <li><Link to={"/"} className={"login-link"}> All
                Products </Link>
            </li>
            <li><LogoutButton
                       setUserNameToAnonymous={props.setUserNameToAnonymous}/>
            </li>
        </ul>
    )

}