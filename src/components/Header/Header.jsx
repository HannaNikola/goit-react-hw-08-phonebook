
import { useAuth } from '../../hooks/useAuth';
 import { Navigation } from '../Navigation/Navigation';
 import { AuthNav } from 'components/AuthNav/AuthNav';
 import { UserMenu } from 'components/UserMenu/UserMenu';


import { Box, AppBar, Toolbar, Typography } from '@mui/material';
 


export const Header = () => {
    const { isLoggedIn } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Navigation />
                    </Typography> 
            
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </Toolbar>
            </AppBar>
        </Box>

    );
}





// export const Header = () => {
//     const { isLoggedIn } = useAuth();
//     return (
//         <header>
            
           
//             <Navigation />
//             {isLoggedIn ? <UserMenu /> : <AuthNav />}
//         </header>
       
//     );
// };
