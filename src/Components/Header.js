import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/Constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    const dispatch = useDispatch()
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // dispatch(removeUser())
            navigate('/')
        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user
                console.log("data check", uid, email, displayName, photoURL)
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate('/browser')
            } else {
                // User is signed out
                dispatch(removeUser())
                navigate('/')
            }
        });
        //unsubscribe when component unmount
        return () => unsubscribe();
    }, [])
    const handleGptSearchClick = () => {
        // Toggle GPT Search
        dispatch(toggleGptSearchView())
    }
console.log("--user--",user)
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }
    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
            <img
                className='w-44 mx-auto md:mx-0 '
                src={LOGO}
                alt='logo' />
            {user && <div className='flex p-2 justify-between'>
                {showGptSearch && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}

                </select>}
                <button className='py-2 px-4 m-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>{showGptSearch ? "Home" : "GPT Search"}</button>
                <img className='hidden md:block h-10 w-10 mt-4 ' alt='usericon'
                    src={user?.photoURL} />
                <button className='mt-0 text-white' onClick={handleSignOut} >Sign Out</button>
            </div>}
        </div>
    )
}

export default Header