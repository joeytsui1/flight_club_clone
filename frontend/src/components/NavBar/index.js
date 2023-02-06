import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import "./NavBar.css"

const NavBar = () => {
    const dispatch = useDispatch()
    return (
        <>
            <nav >
                <div>
                    <button onClick={(e) => {
                        e.preventDefault();
                        dispatch(logout());
                    }}>Sign out</button>
                </div>
            </nav>
        </>
    )
}

export default NavBar