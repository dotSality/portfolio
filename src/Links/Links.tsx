import React, {useState} from 'react';
import s from './Links.module.scss'
import s_c from './../../src/common/styles/Container.module.scss'
import vk from '../assets/image/vk.svg';
import telegram from '../assets/image/telegram.svg';
import instagram from '../assets/image/instagram.svg';
import linkedIn from '../assets/image/linkedin.svg';
import arrow from '../assets/image/arrow.svg';
import {Link} from './Link/Link';

export const Links = () => {

    const [active, setActive] = useState<boolean>(false)

    const toggleActive = () => setActive(!active)

    const linksContainerClassName = `${s.linksContainer} ${active ? s.linksActive : ''}`
    const burgerClassName = `${s.arrow} ${active ? s.arrowActive : ''}`

    return (
        <div className={s.mainContainer}>
            <div className={`${s_c.contentContainer} ${linksContainerClassName}`}>
                <Link backgroundImage={vk}
                    href={'https://vk.com/salityy'}/>
                <Link backgroundImage={telegram}
                    href={'https://t.me/sality33'}/>
                <Link backgroundImage={instagram}
                    href={'https://www.instagram.com/the.sality/'}/>
                <Link backgroundImage={linkedIn}
                    href={'https://www.linkedin.com/in/maxim-ostapkevich-37073822b/'}/>
            </div>
            <div className={s.burgerContainer}>
                <div onClick={toggleActive}
                    style={{backgroundImage: `url(${arrow})`}} className={burgerClassName}>
                </div>
            </div>
        </div>
    );
};

