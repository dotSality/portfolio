import s from './Header.module.scss'
import {Nav} from '../Nav/Nav';

export function Header() {
    return (
        <div className={s.header}>
            <Nav/>
        </div>
    )
}