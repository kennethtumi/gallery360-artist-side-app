import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/Firebase';




export function useAuth(){

    const [user, setUser] = useState('');
    const [message, setMessage] = useState('auth running');

    useEffect(()=>{
          // const unsubscribe = onAuthStateChanged(auth,(user)=>{
          //   console.log('frdfd',user)
          //   user ? setUser(user) : setUser(undefined)
          //   return unsubscribe;
          // })
         // console.log('auth running ')
    },[])

    //return{user}
    return  {message}

}