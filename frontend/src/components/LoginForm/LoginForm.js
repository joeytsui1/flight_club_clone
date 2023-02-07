import React, { useState } from "react"
import * as sessionActions from "../../store/session"
import { useDispatch } from "react-redux"


const LoginForm = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ email, password }))

            .catch(async (data) => {
                console.log(data)
                // let data;
                // try {
                //     data = await response.clone().json();
                // } catch {
                //     data = await response.text();
                // }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                // else setErrors([response.statusText]);
            });
    }

    const errorMessage =  errors.map(error => <li key={error}>{error}</li>) 
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(sessionActions.login({email: "demo@aa.io", password: "password"}))
    }
    return (
        <>
            <div className="login-form">
            <h2 className="login-header">Welcome to Arena Goods</h2>
                <form className="login-form-container" onSubmit={handleSubmit}>
                    <input
                        className="email-input"
                        type="text"
                        value={email}
                        onChange={e => { setEmail(e.target.value) }}
                        placeholder="Email Address*"
                    />
                    <br></br>
                    <ul className='login'>{errorMessage}</ul>
                    <br></br>
                    <input
                        className="password-input"
                        type="password"
                        value={password}
                        onChange={e => { setPassword(e.target.value) }}
                        placeholder="Password*"
                    />
                    <br></br>
                    <ul className='login'>{errors.map(error => <li key={error}>{error}</li>)}</ul>
                    <br></br>
                    <button className="login-button">Login</button>
                    <button className="demo-user-button" onClick={handleClick}>Demo</button>
                </form>
        
                <br/>
                <div className="extra-links-login">
                    <a className="login-forgotpassword" href="#">Forgot Password?</a>
                    <span className="span"> | </span>
                    <a className="login-signup-link" href="/signup">Create an Account</a>
                </div>
            </div>
        </>
    )
}

export default LoginForm