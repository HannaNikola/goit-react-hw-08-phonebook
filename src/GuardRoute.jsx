import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { useSelector } from "react-redux";



export const GuardRoute = ({children}) => {
    const { isLoggedIn } = useAuth();

    const {state:prevLocation} =useSelector
    return !isLoggedIn ? children : <Navigate to={prevLocation ?? '/'} />
        
    
}





