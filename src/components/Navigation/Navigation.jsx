import { NavLink } from 'react-router-dom';
import { AuthNav } from 'components/AuthNav/AuthNav';


export const Navigation = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
            <AuthNav/>
           {/* додать логику рендера компонента AuthNav и перенести в другой фаил  */}
        </nav>
    )
}