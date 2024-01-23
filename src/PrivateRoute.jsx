
import { Navigate} from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();
    return  isLoggedIn ? children : <Navigate to = '/login' state={location} /> ;
    
}


// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//     const { isLoggedIn, isRefreshing } = useAuth();
//     const shouldRedirect = !isLoggedIn && !isRefreshing;

//     return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };


