import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/Constant';

const Header = () => {
   const navigate = useNavigate()
   const user = useSelector((store) =>store)
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
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid,email,displayName,photoURL} = user
                console.log("data check",uid,email,displayName,photoURL)
                dispatch(addUser({uid:uid , email : email,displayName : displayName,photoURL : photoURL }))
                navigate('/browser')
            } else {
              // User is signed out
              dispatch(removeUser())
              navigate('/')
            }
          });
          //unsubscribe when component unmount
          return ()=> unsubscribe();
       },[])
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className='w-44 '
        src={LOGO}
        alt = 'logo'/>
        {user && <div className='flex'>
            <img className='h-10 w-10 mt-4 ' alt='usericon' 
            src={user?.photoURL}/>
            <button className='mt-0 text-white' onClick={handleSignOut} >Sign Out</button>
        </div>}
    </div>
  )
}

export default Header