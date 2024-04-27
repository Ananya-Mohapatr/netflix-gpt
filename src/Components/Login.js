import React,{useState} from 'react'
import Header from './Header'

const Login = () => {

const [isSignedInForm,setIsSignedInForm] = useState(true)
const toggleSignInForm = () =>{
    setIsSignedInForm(!isSignedInForm)
}


  return (
    <div >
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg'
        alt = 'logo'/>
    </div>
    <form className='w-3/12 absolute p-12 bg-black  my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70 autofill:off '>
        <h1 className='font-bold text-3xl py-4'>{isSignedInForm ? 'Sign In' : 'Sign Up'}</h1>
       {!isSignedInForm ? <input type='text' placeholder='Full Name' className='py-2 my-4 w-full px-1 mx-0.1 rounded-lg'/> : ''}
        <input type='text' placeholder='Email Address' className='py-2 my-4 w-full px-1 mx-0.1 rounded-lg'/>
        <input type='password' placeholder='Password' className='py-2 my-4 w-full px-1 mx-0.1 rounded-lg'/>
        <button className='py-2 my-6 mx-0.1 bg-red-700 w-full rounded-lg cursor-pointer'>{isSignedInForm ? 'Sign In' : 'Sign Up'}</button>
        <p  className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignedInForm ? "New to Netflix ?Sign Up Now" :
        "Already registered ? Sign In Now"}</p>
    </form>

    </div>
  )
}

export default Login