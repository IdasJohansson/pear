import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { HomeView } from "../views/homeView/homeView";
import { SignInView } from "../views/signInView/signInView";
import routingPath from "./routingPath";
import { useContext, useEffect } from "react";
import { UserContext } from "../shared/provider/UserProvider";
import LocalStorage from "../shared/storage/LocalStorage"; 


export const Routing = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); 
  
    // This method checks if user is authenticated, and gets the stored users name from localstorages
    const isUserAuthenticated = () => {
      const userFromBrowserMemory = localStorage.getItem(LocalStorage.username); 
      setAuthenticatedUser(userFromBrowserMemory); 
    }
  
    // This function makes sign in view not to be visible for an authenticated user
    const blockIfAuthenticated = (view) => {
      if (authenticatedUser) return <HomeView/>; 
      else return view; 
    }; 
  
    // This function makes all views that uses it blocked if they are nog authenticated
    const authenticationRequierd = (view) => {
      if (authenticatedUser) return view; 
      else return <SignInView/>; 
    }; 
  
    // When the webbsite first renders this hook checks if there is a user authenticated
    useEffect(() => {
      isUserAuthenticated(); 
    }, []);  

    return (
        <BrowserRouter>
        {/* Routes ser till att endast en del läggs till i taget */}
        <Routes>
        <Route path={routingPath.signInView} element={blockIfAuthenticated(<SignInView/>)}/>
        <Route exact path={routingPath.homeView} element={authenticationRequierd(<HomeView/>)} />
        </Routes>
        </BrowserRouter>
    )
}; 