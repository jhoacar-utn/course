import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthorizationContext } from "../../context/authorization"



export default function AuthMiddleware({ element }) {

    const { isLoggedIn } = useContext(AuthorizationContext);

    return (
        <>
            {isLoggedIn && element}
            {!isLoggedIn && <Navigate to="/"></Navigate>}
        </>
    )

}