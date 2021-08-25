import Background from '../Background/Background'
import lexi from "../images/chain.png"
import { Form, Text,FormAttribute,API, Password, Image } from '../Form/Exports';
import { useState } from 'react';
import "../Form/form.css"

export default function SignIn () {
    const formElements = [
        new FormAttribute("propic", "Profile Picture", Image),
        new FormAttribute("email","Email",Text),
        new FormAttribute("username", "Username", Text),
        new FormAttribute("password","Password", Password),
        new FormAttribute("cpassword","Confirm Password", Password),
        new FormAttribute("first_name", "First Name", Text),
        new FormAttribute("last_name", "Last Name", Text)
    ]
    function onSuccess(){
        window.location.href = "/"
    }
    const api = new API("/api/signup","post");
    return (
        <Background title = "Sign Up" image = {lexi}>
            <div className = "form-page">
                <Form onSuccess = {onSuccess} inputs = {formElements} title = "Sign Up" api = {api}/>
            </div>
           
        </Background>
    )
}