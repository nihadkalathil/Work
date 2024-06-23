import React, { useState } from 'react';

export default function Register() {
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(username);
    }
  return (
    <div>
         <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" value={username} required
        onChange={(e)=> setName(e.target.value)}/>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>

        <input type="submit" onClick={handleSubmit}/>Login
        <label>
        <input type="checkbox" checked="checked" name="remember"/> Remember me
        </label>
    </div>
  )
}