import React from 'react'

function LoginForm({isLoggedIn, onLogin}){
    if(isLoggedIn){
        return <p>You are logged in!</p>
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        onLogin();
    }
    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"/>
            <br></br>
            <label htmlFor="password">Password</label>
            <input is="password" type="password"/>
            <br></br>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm