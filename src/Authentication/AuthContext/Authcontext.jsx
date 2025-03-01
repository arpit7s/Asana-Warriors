import React,{ createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider =({children})=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [userName,setUserName] = useState('')
    return(
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,userName,setUserName}}>
            {children}
        </AuthContext.Provider>
    )
}