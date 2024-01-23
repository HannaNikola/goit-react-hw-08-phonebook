import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import Button from '@mui/material/Button';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <nav>
            <Button color="inherit" component={NavLink} to='/'>Home</Button>
            

            {isLoggedIn && (
                <Button color="inherit" component={NavLink} to='/contacts'>Contacts</Button> 
            )}

            
        </nav>
    )
}
