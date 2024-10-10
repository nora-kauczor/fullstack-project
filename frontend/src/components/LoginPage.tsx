type Props = {
    login: () => void
    // .....
}



export default function LoginPage({login}: LoginPageProps) {
    return (
        <button onClick={login}>Login</button>
    )
}