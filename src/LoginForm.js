import React from 'react';
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBfkaotP8-SSzs_8WcwvcNSBSvtfiBviCs",
authDomain: "chat-web-app-ab848.firebaseapp.com",
databaseURL: "https://chat-web-app-ab848-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "chat-web-app-ab848",
storageBucket: "chat-web-app-ab848.appspot.com",
messagingSenderId: "504690421343",
appId: "1:504690421343:web:575edaa6637e65bd25b5ea",
measurementId: "G-PLLJYQZ74E"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 

const LoginForm = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleSignIn = (event) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log("signed in");
      navigate("/chat");
    })
    .catch((error) => {
      //error
    });
  event.preventDefault();
  }
  const handleSignUp = (event) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/chat");
      })
      .catch((error) => {
        // ..
      });
      event.preventDefault();
  }
  return(
    <form className="authForm">
              <div className="inputRow">
            <div className="iconInputHolder"><i className="inputIcon fa-sharp fa-solid fa-user"></i></div>
            <input type="text" className="usernameInput" id="usernameInp" value={email} onChange={handleEmailChange}/>
        </div>
        <div className="inputRow" style={{"marginBottom":0}}>
            <div className="iconInputHolder"><i className="inputIcon fa-sharp fa-solid fa-key"></i></div>
            <input type="password" className="passInput" id="passInp" autoComplete='on' value={password} onChange={handlePasswordChange}/>
        </div>
        <div className="errorContainer">
            <p id="userFormError" className="errorField"></p>
        </div>
        <div className="inputRow">
            <button className="logInButton" id="logInBtn" onClick={handleSignIn}>Log in</button>
        </div>
        <div className="inputRow" id="inputSignUpRow">
            <button className="signUpButton" id="signUpBtn" onClick={handleSignUp}>Sign up</button>
        </div>
    </form>
  );
}
export default LoginForm;