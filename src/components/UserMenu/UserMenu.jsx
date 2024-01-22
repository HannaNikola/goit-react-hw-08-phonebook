import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
        <div>
            <p>Welcom {user.email}</p>
            <Button color="inherit" type="button" onClick={() => dispatch(logOut())}>Logout</Button>
            
        </div>
    )
}