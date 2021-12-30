import { AiOutlineFacebook, AiOutlineGooglePlus } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
    const { loginWithRedirect, user } = useAuth0();

    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to TaoChat</h2>
                <button onClick={() => loginWithRedirect()}>
                    <AiOutlineGooglePlus /> Sign in with Google
                </button>
                <div className="facebook-button facebook">
                    <AiOutlineFacebook /> Sign in with Facebook
                </div> 
            </div>
        </div>
    );
}

export default Login;