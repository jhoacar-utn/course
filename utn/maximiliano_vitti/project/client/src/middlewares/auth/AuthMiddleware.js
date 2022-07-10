import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AppContext } from "../../context/store";



export default function AuthMiddleware({ element }) {

    const { isLoggedIn } = useContext(AppContext);

    return (
        <>
            {isLoggedIn && element}
            {!isLoggedIn && <Navigate to="/"></Navigate>}
        </>
    )

}