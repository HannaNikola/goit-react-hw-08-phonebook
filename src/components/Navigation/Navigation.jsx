import { NavLink } from 'react-router-dom';
//  import { UserMenu } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <nav>
            <NavLink to='/'>
                Home
            </NavLink>
            {isLoggedIn && (
            <NavLink to='/contacts'>
                Contacts
            </NavLink>
            )}
            {/* <UserMenu/> */}
        </nav>
    )
}