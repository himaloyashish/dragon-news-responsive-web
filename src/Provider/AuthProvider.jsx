import React, { createContext, useState } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    // const [user, setUser] = useState(null)

    const user = null

    const userInfo = {
        user

    }

    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;