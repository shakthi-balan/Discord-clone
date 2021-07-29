import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";

function Login() {
    const signIn = () => {
        //do clever google login 
        auth.signInWithPopup(provider)
        .catch((error )=>alert(error.message) );
    };
    return (
        <div className  = 'login'>
            
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/b/b7/Discord_logo_svg.svg/640px-Discord_logo_svg.svg.png" alt="" />

            </div>
            <Button onClick= {signIn}>Sign In</Button>
        </div>
    )
}

export default Login
