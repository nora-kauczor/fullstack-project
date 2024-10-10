type Props = {
    login: () => void
    // .....
}

interface LoginPageProps {
    login?: () => void
}

export default function LoginPage({login}: LoginPageProps) {
    return (
        <button onClick={login}>Login</button>
    )
}