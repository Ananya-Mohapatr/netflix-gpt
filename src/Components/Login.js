import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG_URL, avatar } from '../utils/Constant';

const Login = () => {

  const [isSignedInForm, setIsSignedInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const email = useRef(null)   //this gives reference
  const password = useRef(null)
  const name = useRef(null)
  const dispatch = useDispatch()
  const toggleSignInForm = () => {
    setIsSignedInForm(!isSignedInForm)
  }

  const handleButtonCLick = (e) => {
    //validate form data

    const message = checkValidData(name?.current?.value, email.current.value, password.current.value)
    setErrorMessage(message)
    if (message) return;
    else {
      //sign in/Sign up
      if (!isSignedInForm) {
        //Sign Up
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("userCredential", user)
            updateProfile(user, {
              displayName: name.current.value, photoURL: avatar
            }).then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))

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
            setErrorMessage(errorMessage)
            // ..
          });
      }
      else {
        //Sign In
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage)
          });
      }
    }

    //Sign In /Sign Up

  }


  return (
    <div >
      <Header />
      <div className='absolute'>
        <img className='h-screen object-cover md:w-screen' src={BG_IMG_URL} alt='logo' />
      </div>
      <form className='w-full md:w-3/12 absolute p-12 bg-black  my-40 mx-auto right-0 left-0 rounded-lg bg-opacity-70 autofill:off ' onSubmit={(e) => e.preventDefault()}>
        <h1 className='font-bold text-3xl py-4  text-white'>{isSignedInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignedInForm ? <input type='text' ref={name} placeholder='Full Name' className='py-2 my-4 w-full px-1 mx-0.1 rounded-lg' /> : ''}
        <input type='text' ref={email} placeholder='Email Address' className='py-2 my-4 w-full px-1 mx-0.1 rounded-lg' />
        <input type='password' ref={password} placeholder='Password' className='py-2 my-4 w-full px-1 mx-0.1 rounded-lg' />
        <p className='text-red-500 w-full text-sm'>{errorMessage}</p>
        <button className='py-2 my-6 mx-0.1 bg-red-700 w-full rounded-lg cursor-pointer' onClick={handleButtonCLick}>{isSignedInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className='text-white cursor-pointer' onClick={toggleSignInForm}> {isSignedInForm ? "New to Netflix ?Sign Up Now" :
          "Already registered ? Sign In Now"}</p>
      </form>

    </div>
  )
}

export default Login