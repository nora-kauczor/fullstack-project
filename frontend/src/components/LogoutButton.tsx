import './NavBar.css'

type Props = {
    setUserNameToAnonymous: () => void,
}


export default function LogoutButton(props: Readonly<Props>) {

    function logout() {
        props.setUserNameToAnonymous()
        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080' : window.location.origin
        window.open(host + '/api/auth/logout', '_self')
    }

    return (
        <button onClick={logout}>Logout</button>
    )
}