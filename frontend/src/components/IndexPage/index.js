import { useSelector } from "react-redux"
const IndexPage = () => {
    const currentUser = useSelector(state => state.session.user)
    return (
        <>
            <h1>Hey {currentUser ? currentUser.first : "user"}, This is the home page</h1>
        </>

    )
}

export default IndexPage