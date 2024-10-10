import './NavBar.css'

type Props = {
    setUserNameToAnonymous: () => void,
    loggedIn: boolean
}


export default function Login(props: Readonly<Props>) {

    function login() {
        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080' : window.location.origin
        window.open(host + '/oauth2/authorization/github', '_self')
    }

    function logout() {
        props.setUserNameToAnonymous()
        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080' : window.location.origin
        window.open(host + '/api/auth/logout', '_self')
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            if (props.loggedIn) {
                logout()
            } else {
                login()
            }
        }
    }

    return (
        <div id={"login"}>
            {props.loggedIn ? <p
                    onClick={logout}
                    onKeyDown={handleKeyDown}>Logout</p>
                : <p
                    onClick={login}
                    onKeyDown={handleKeyDown}>Login</p>}
        </div>

    )
}