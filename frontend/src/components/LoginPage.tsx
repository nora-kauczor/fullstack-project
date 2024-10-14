import './LoginPage.css';


export default function LoginPage() {
    function login() {
        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080' : window.location.origin
        window.open(host + '/oauth2/authorization/github', '_self')
    }

    return (
        <div id={"login-page"}>
            <h2>Welcome to the Shopping List App</h2>
        <button
        onClick={login}
    >Login</button>
        </div>)
}
