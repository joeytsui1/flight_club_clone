import React,  { useState } from "react"
import * as sessionActions from "../../store/session"
import { useDispatch } from "react-redux"

const SignUpForm = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(sessionActions.signup({ email, first, last, password}))
    }
    return (
        <>
            <h2 className="signup-header">
                Looks like you're new here.
                <br/>
                We need some info.
            </h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={first}
                    onChange={e => { setFirst(e.target.value) }}
                    placeholder="First Name*"
                />
                <br></br>
                <input
                    type="text"
                    value={last}
                    onChange={e => { setLast(e.target.value) }}
                    placeholder="Last Name*"
                />
                <br></br>
                <input 
                 type="text" 
                 value={email}
                 onChange={e => {setEmail(e.target.value)}}
                 placeholder="Email Address*"
                />
                <br></br>
                <input
                 type="password"
                 value={password}
                 onChange={e => {setPassword(e.target.value)}}
                 placeholder = "Password*"
                />
                <br></br>
                {/* <input
                    type="text"
                    // value={firstName}
                    // onChange={e => { setFirstName(e.target.value) }}
                    placeholder="Confirm Password*"
                /> */}
                <br></br>
                <div>
                    <p className="policy">By clicking "Register", you agree to our <a href="#">Terms and condition</a> and <a href="#">Privacy Policy</a>
                    </p>
                </div>
                <button className="signup-button">Register</button>
            </form>

            <div>
                <a className="signup-login-link" href="/login">Already Registered?</a>
            </div>
        </>
    )
}

export default SignUpForm