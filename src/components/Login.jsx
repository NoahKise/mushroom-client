import '../App.css';
import React from "react";
import { useState } from "react";
import { FormControl, Input, Button } from '@mui/material';

export const Login = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [accessToken, setAccessToken] = useState("");

    const handleEmailChange = (event) => {
        setUserEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setUserPassword(event.target.value);
    };

    const doLogIn = async () => {
        try {
            const response = await fetch('https://localhost:5001/Accounts/SignIn', {
                method: 'POST',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: userEmail,
                    password: userPassword,
                }),
            });

            const data = await response.json();
            setAccessToken(data.token);
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h1>This is the Login page</h1>
            <FormControl id="loginForm">
                <Input type='text' placeholder='Email' value={userEmail} onChange={handleEmailChange} />
                <Input type='password' placeholder='Password' value={userPassword} onChange={handlePasswordChange} />
                <Button id="loginButton" className="button" type='button' onClick={doLogIn}>Log In</Button>
            </FormControl>
            <br />
            <FormControl id="registerForm" >  {/* onSubmit={handleSubmit} */}
                <Input type='text' placeholder='Email' />
                <Input type='password' placeholder='Password' />
                <Input type='password' placeholder='Confirm Password' />
                <Button id="loginButton" className="button" type='submit'>Register</Button>
            </FormControl >

            <h2>{accessToken}</h2>
        </>
    )
}