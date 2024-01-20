import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";



export const GuardRoute = ({children}) => {
    const { isLoggedIn } = useAuth();

    return !isLoggedIn ? children : <Navigate to ='/'/>
        
    
}




// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//     const { isLoggedIn } = useAuth();

//     return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };
