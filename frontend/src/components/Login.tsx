import './NavBar.css'
type Props = {
    login: () => void,
    logout: () => void,
    loggedIn: boolean
}



export default function Login(props: Readonly<Props>) {
    return (
        <>
            {props.loggedIn ?  <button onClick={props.logout}>Logout</button>
                : <button onClick={props.login}>Login</button>}
        </>

    )
}