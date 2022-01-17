import s_c from '../common/styles/Container.module.scss'
import s from './Footer.module.scss'
import {Link} from './Link/Link';
import vk from './../assets/image/vk.svg';
import telegram from './../assets/image/telegram.svg';
import instagram from './../assets/image/instagram.svg';
import linkedIn from './../assets/image/linkedin.svg';



export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${s_c.contentContainer} ${s.container}`}>
                <h2>Maxim Ostapkevich</h2>
                <div className={s.linksContainer}>
                    <Link backgroundImage={vk}
                     href={'https://vk.com/salityy'}/>
                    <Link backgroundImage={telegram}
                     href={'https://t.me/sality33'}/>
                    <Link backgroundImage={instagram}
                     href={'https://www.instagram.com/the.sality/'}/>
                    <Link backgroundImage={linkedIn}
                     href={'https://www.linkedin.com/in/maxim-ostapkevich-37073822b/'}/>
                </div>
                <h2>© 2021 All copyright reserved</h2>
            </div>
        </div>
    )
}