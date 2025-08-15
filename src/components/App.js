
import React, { useState } from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = ()=>{   //function to update login state
    setIsLoggedIn(true);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin}/>
    </div>
  )
}

export default App
