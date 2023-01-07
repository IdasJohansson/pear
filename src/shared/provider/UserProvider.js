import { useState, createContext } from "react";    

// UserContext is created and Userprovider wraps everything up in App.js so that authenticatedUser can be reached globally in the project.
export const UserContext = createContext(null) 

// To make the UserProvider work on the wrapped elements you need to add "children"
export const UserProvider = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null); 
    return (
        <UserContext.Provider value = {[authenticatedUser, setAuthenticatedUser]}>
            {children}
        </UserContext.Provider>
    )
}