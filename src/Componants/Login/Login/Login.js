import React, { useContext, useState } from 'react';
import  firebase from 'firebase';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userAuth } from '../../../App';
import { BlurOnTwoTone, StayPrimaryLandscape } from '@material-ui/icons';
import { BottomNavigation } from '@material-ui/core';
import { Button } from 'bootstrap';
import { useForm } from "react-hook-form";
import loginImg from '../../../images/login.png';
import './login.css'


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

const Login = () => {
   const [userInfo,setUserInfo] =useContext(userAuth);
   const [user,setUser]=useState({
     email:'',
     password:''
   })
console.log("user",user);

const provider = new firebase.auth.GoogleAuthProvider();


const handleWithGoogle =()=>{
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const {displayName,email,photoURL}=result.user
     const logedIn={
         name:displayName,
         email:email,
         photo:photoURL,
         islogged:true,

     }
     setUserInfo(logedIn)

    })
    .catch((error) => {
      console.log(error);
    });
}


const [show, setShow] = React.useState(false);
const container = React.useRef(null);

const handleClick = () => {
  setShow(!show);
};
//create user email and passs



const { register, handleSubmit, watch, errors } = useForm();
const onSubmit = data =>{
  firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
   console.log("n",user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
  
    return (
        <div className='row '>
           {/* <button
            onClick={handleWithGoogle}
            className="btn btn-primary">Google</button>

        <button type="button" onClick={handleClick}>
        {show ? 'Log  `In' : 'LogOut'}
      </button>

        {
            show ? <button>LogOut</button>:<button>LogIn</button>
        } */}

        <div className="col-md-6 mt-5 d-flex justify-content-center">
        <div>
                        <h5 className='text-center'>Login</h5>
                    
              
                <form className='login'  onSubmit={handleSubmit(onSubmit)}>

                    <input className='login' name="email" ref={register({ required: true })} placeholder='User Name' />
                    {errors.email && <span>This field is required</span>}
                    <br/> 
                    <input name="password" type='password' ref={register({ required: true })} placeholder='Password' />
                    {errors.password && <span>This field is required</span>}
                        <br/><br/>
                    <input className='btn-primary' type="submit" /> 
                </form>

                <br/>
                <h6 className='text-center'>OR</h6>
            <button
            onClick={handleWithGoogle}
            className="btn btn-primary w-100">
                Login With Google
            </button>
          </div>
        </div>


        <div className="col-md-6 loginImg">
            <img src={loginImg} alt=""/>
        </div>
        
        </div>
    );
};

export default Login;