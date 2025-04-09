import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const Authcontext = createContext();

const AuthProvider = ({children}) => {
  // localStorage.clear()
    const [userData, setuserData] = useState(null)
    
    useEffect(() => {
      setLocalStorage()
        const {user} = getLocalStorage()
        setuserData(user)
    },[])

    // const data = getLocalStorage();
    // console.log(data);
  return (
    <div>
        <Authcontext.Provider value = {[userData, setuserData]}>
            {children}
            </Authcontext.Provider>
    </div>
  )
}

export default AuthProvider
