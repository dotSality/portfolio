import s_c from '../common/styles/Container.module.scss'
import s from './Footer.module.scss'
import {ItemTitle} from '../common/components/Titles/h3/ItemTitle';


export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${s_c.contentContainer} ${s.container}`}>
                {/*<div className={s.linksContainer}>*/}
                {/*    <Link backgroundImage={vk}*/}
                {/*     href={'https://vk.com/salityy'}/>*/}
                {/*    <Link backgroundImage={telegram}*/}
                {/*     href={'https://t.me/sality33'}/>*/}
                {/*    <Link backgroundImage={instagram}*/}
                {/*     href={'https://www.instagram.com/the.sality/'}/>*/}
                {/*    <Link backgroundImage={linkedIn}*/}
                {/*     href={'https://www.linkedin.com/in/maxim-ostapkevich-37073822b/'}/>*/}
                {/*</div>*/}
                <ItemTitle>
                    Copyright © {new Date().getFullYear()} <br/> All rights reserved
                </ItemTitle>
            </div>
        </div>
    )
}