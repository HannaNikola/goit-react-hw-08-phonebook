import { Conteiner } from '../App/App.styled';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Suspense} from 'react';

export const Layout = () => {
    return (
        <div>
            <Conteiner>
                <Header />
                <Suspense fallback={'loading... '}>
                    <Outlet />
                </Suspense>
                </Conteiner>
       </div>
   )
}