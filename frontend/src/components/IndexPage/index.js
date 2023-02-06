import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";
// import { Redirect } from "react-router-dom";
import { Navigate } from "react-router-dom"


const IndexPage = () => {
    const dispatch = useDispatch()

    const logoutButton = (
        <button onClick={(e) => {
            e.preventDefault();
            dispatch(logout());
        }}>Sign out</button>
    )
    const handleClick = (e) => {
        e.preventDefault()
        
        return (
            <Navigate to={'/login'}/>
        )
    }
    const loginButton = (
        <button onClick={handleClick}>Login</button>
    )

    return (
        <>
            <h1>This is the home page</h1>
            {logoutButton}
        </>

    )
}

export default IndexPage