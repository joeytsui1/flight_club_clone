import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import  SignUpForm  from "./SignUpForm";
import './SignUpForm.css'

const SignUpFormPage = () => {
    const currentUser = useSelector(state => state.session.user)

    return currentUser ? (<Navigate to="/"/>) : (
        <div className="signup-page">
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default SignUpFormPage