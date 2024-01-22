import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export const AuthNav = () => {
    

    return (
        <div>
            <Button color="inherit" component={NavLink} to='/register'>Register</Button>
            <Button color="inherit" component={NavLink} to='/login'>Log In</Button>
            
             {/* <NavLink to='/register'>
                Register
            </NavLink>  */}
            
             {/* <NavLink to='/login'>
                Log In
            </NavLink>    */}
        </div>
    )
}


