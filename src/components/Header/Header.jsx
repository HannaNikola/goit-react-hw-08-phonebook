
import { useAuth } from '../../hooks/useAuth';
 import { Navigation } from '../Navigation/Navigation';
 import { AuthNav } from 'components/AuthNav/AuthNav';
 import { UserMenu } from 'components/UserMenu/UserMenu';


import { Box, AppBar, Toolbar, Typography } from '@mui/material';
 

// export const Header = () => {
//     const { isLoggedIn } = useAuth();
//     return (
//         <header>
            
           
//             <Navigation />
//             {isLoggedIn ? <UserMenu /> : <AuthNav />}
//         </header>
       
//     );
// };


export const Header = () => {
    const { isLoggedIn } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                       
            <Navigation />
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </Toolbar>
            </AppBar>
        </Box>

    );
}

// export default function ButtonAppBar() {
//     const { isLoggedIn } = useAuth();
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="menu"
//                         sx={{ mr: 2 }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                         News
//                     </Typography>
//                     <Button color="inherit">Login</Button>
//                 </Toolbar>
//                 <Navigation />
//                            {isLoggedIn ? <UserMenu /> : <AuthNav />}
//             </AppBar>
//         </Box>
//     );
// }