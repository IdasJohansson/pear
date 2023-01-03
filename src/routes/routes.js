import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { HomeView } from "../views/homeView/homeView";
import { SignInView } from "../views/signInView/signInView";
import routingPath from "./routingPath";


export const Routing = () => {

    return (
        <BrowserRouter>
        {/* Routes ser till att endast en del läggs till i taget */}
        <Routes>
        <Route path={routingPath.signInView} element={<SignInView/>}/> 
        <Route exact path={routingPath.homeView} element={<HomeView/>}/> 
        </Routes>
        </BrowserRouter>
    )
}; 