import React from 'react';


const AuthContext=React.createContext({
    isLoggedIn:false,
    onLogout:()=>{},
    onSwictch:false,
})//globalnyi sostoinia,sate Storage

export default AuthContext