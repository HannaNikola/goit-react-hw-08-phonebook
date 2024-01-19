import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
        <div>
            <p>Welcom {user.email}</p>
            <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
        </div>
    )
}