import React from 'react'
import { createContext,useState } from 'react'

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        name: 'John Doe',
    })
    const handleChange = (newName) => {
        
        setUser(prevState => ({
            ...prevState,
            name: newName,
        }));
    }
    return (
        <UserContext.Provider value={{user, handleChange}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}


// export default 