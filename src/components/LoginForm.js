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
            <label for="username">Username</label>
            <input type="text"/>
            <br></br>
            <label for="password">Password</label>
            <input type="password"/>
            <br></br>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm