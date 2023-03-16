import React from 'react';
import {useNavigate} from "react-router-dom"
import { auth } from './LoginForm';
import { signOut } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';

const SignOut = () => {
  const navigate = useNavigate();
  const handleSignOut = (event) => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) =>{
      //error
    });
  }
  return(
      <div className='managementBar'>
          <div className="iconInputHolder"><button className="inputIcon fas fa-sign-out-alt" onClick={handleSignOut}></button></div>
      </div>
  );

}
export default SignOut;