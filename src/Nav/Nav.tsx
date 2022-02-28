import s from './Nav.module.scss';
import { Link } from 'react-scroll';

export const Nav = () => {

    return (
        <div className={s.nav}>
            <Link smooth duration={500} className={s.link} to={'main'}>Main</Link>
            <Link smooth duration={500} className={s.link} to={'skills'}>Skills</Link>
            <Link smooth duration={500} className={s.link} to={'projects'}>Projects</Link>
            <Link smooth duration={500} className={s.link} to={'contacts'}>Contacts</Link>
        </div>
    )
}
