import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import  SignUpForm  from "./SignUpForm";
import './SignUpForm.css'

const SignUpFormPage = () => {
    const currentUser = useSelector(state => state.session.user)

    return currentUser ? (<Redirect to="/"/>) : (
        <div className="signup-page">
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default SignUpFormPage