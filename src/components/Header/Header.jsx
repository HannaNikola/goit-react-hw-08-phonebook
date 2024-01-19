
import { useAuth } from '../../hooks/useAuth';
 import { Navigation } from '../Navigation/Navigation';
 import { AuthNav } from 'components/AuthNav/AuthNav';
 import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
    const { isLoggedIn } = useAuth();
    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
       
    );
};

