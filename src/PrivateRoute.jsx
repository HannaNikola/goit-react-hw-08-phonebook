
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export const PrivateRoute = ({children}) => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();
    return  isLoggedIn ? children : <Navigate to = '/login' state={location} /> ;
    
}





