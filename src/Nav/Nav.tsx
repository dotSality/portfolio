import s from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href={'#main'}>Main</a>
            <a href={'#skills'}>Skills</a>
            <a href={'#projects'}>Projects</a>
            <a href={'#contacts'}>Contacts</a>
        </div>
    )
}
