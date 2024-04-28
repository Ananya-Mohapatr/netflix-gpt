import React,{useRef, useState} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

const [isSignedInForm,setIsSignedInForm] = useState(true)
const [errorMessage,setErrorMessage] = useState('')
const email = useRef(null)   //this gives reference
const password = useRef(null)
const name = useRef(null)
const navigate = useNavigate()
const dispatch = useDispatch()
const toggleSignInForm = () =>{
    setIsSignedInForm(!isSignedInForm)
}

const handleButtonCLick = (e) =>{
    //validate form data
   
    console.log(email.current.value,password.current.value)
    const message = checkValidData(name?.current?.value,email.current.value,password.current.value)
    setErrorMessage(message)
    console.log("message",message)
   if(message) return;
   else{
    //sign in/Sign up
    if(!isSignedInForm){
      //Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("userCredential",user)
    updateProfile(user, {
        displayName: name.current.value, photoURL: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600"
      }).then(() => {
        // Profile updated!
        // ...
        const { uid,email,displayName,photoURL} = auth.currentUser
            console.log("data check",uid,email,displayName,photoURL)
            dispatch(addUser({uid:uid , email : email,displayName : displayName,photoURL : photoURL }))
        
        navigate('/browser')
      }).catch((error) => {
        // An error occurred
        // ...
        setErrorMessage(error)
      });
   

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error",errorCode,errorMessage);
    setErrorMessage(errorMessage)
    // ..
  });
    }
    else{
     //Sign In
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user",user)
    navigate('/browser')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error",errorMessage)
    setErrorMessage(errorMessage)
  });
    }
   }

    //Sign In /Sign Up

}


  return (
    <div >
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg'
        alt = 'logo'/>
    </div>
    <form className='w-3/12 absolute p-12 bg-black  my-40 mx-auto right-0 left-0 rounded-lg bg-opacity-70 autofill:off ' onSubmit={(e)=>e.preventDefault()}>
        <h1 className='font-bold text-3xl py-4  text-white'>{isSignedInForm ? 'Sign In' : 'Sign Up'}</h1>
       {!isSignedInForm ? <input type='text'ref={name} placeholder='Full Name' className='py-2 my-4 w-full px-1 mx-0.1 rounded-lg'/> : ''}
        <input type='text' ref={email} placeholder='Email Address' className='py-2 my-4 w-full px-1 mx-0.1 rounded-lg'/>
        <input type='password' ref={password} placeholder='Password' className='py-2 my-4 w-full px-1 mx-0.1 rounded-lg'/>
        <p className='text-red-500 w-full text-sm'>{errorMessage}</p>
        <button className='py-2 my-6 mx-0.1 bg-red-700 w-full rounded-lg cursor-pointer' onClick={handleButtonCLick}>{isSignedInForm ? 'Sign In' : 'Sign Up'}</button>
        <p  className='text-white cursor-pointer' onClick={toggleSignInForm}> {isSignedInForm ? "New to Netflix ?Sign Up Now" :
        "Already registered ? Sign In Now"}</p>
    </form>

    </div>
  )
}

export default Login