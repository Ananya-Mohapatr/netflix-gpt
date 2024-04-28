import React, { useEffect } from 'react'
import Login from './Login'
import Header from './Header'
import Browse from './Browse'
import { createBrowserRouter,RouterProvider, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
    const dispatch = useDispatch()  //to add userAction

    const appRouter = createBrowserRouter([
        {
            path:'/',
            element: <Login/>
        },
        {
            path : '/browser',
            element : <Browse/>
        }
    ])
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid,email,displayName,photoURL} = user
            console.log("data check",uid,email,displayName,photoURL)
            dispatch(addUser({uid:uid , email : email,displayName : displayName,photoURL : photoURL }))
        } else {
          // User is signed out
          dispatch(removeUser())
        }
      });
   },[])
   
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body