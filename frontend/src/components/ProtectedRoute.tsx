import {Navigate, Outlet} from "react-router-dom";

type Props = {
    userName: string
}

export default function ProtectedRoute(props: Readonly<Props>) {
    const isUserLoggedIn = props.userName !== "anonymousUser" || !props.userName


    return (
isUserLoggedIn ? <Outlet /> : <Navigate to={"/"}/>
    )
}