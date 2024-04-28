import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const Header = () => {
   const navigate = useNavigate()
   const user = useSelector((store) =>store)
   console.log("userrr",user)
   const dispatch = useDispatch()
    const handleSignOut= () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            // dispatch(removeUser())
            navigate('/')
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className='w-44 '
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt = 'logo'/>
        {user && <div className='flex'>
            {console.log(user)}
            <img className='h-10 w-10 mt-4 ' alt='usericon' 
            src={user?.photoURL}/>
            <button className='mt-0 text-white' onClick={handleSignOut} >Sign Out</button>
        </div>}
    </div>
  )
}

export default Header