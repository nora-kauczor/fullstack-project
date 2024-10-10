type Props = {
    login: () => void
}



export default function LoginPage(props: Readonly<Props>) {
    return (
        <button onClick={props.login}>Login</button>
    )
}