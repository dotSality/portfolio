import s_c from '../common/styles/Container.module.scss'
import s from './Footer.module.scss'
import {Link} from './Link/Link';


export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${s_c.contentContainer} ${s.container}`}>
                <h2>Maxim Ostapkevich</h2>
                <div className={s.linksContainer}>
                    <Link/>
                    <Link/>
                    <Link/>
                    <Link/>
                </div>
                <h2>© 2021 All copyright reserved</h2>
            </div>
        </div>
    )
}