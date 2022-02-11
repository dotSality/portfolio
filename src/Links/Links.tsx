import React, {useState} from 'react';
import s from './Links.module.scss'
import s_c from './../../src/common/styles/Container.module.scss'
import vk from '../assets/image/vk.svg';
import telegram from '../assets/image/telegram.svg';
import instagram from '../assets/image/instagram.svg';
import linkedIn from '../assets/image/linkedin.svg';
import burger from '../assets/image/burger.svg';
import x from '../assets/image/x-mark.svg';
import {Link} from './Link/Link';

export const Links = () => {

    const [active, setActive] = useState<boolean>(false)

    const onActiveHandler = () => setActive(true)
    const offActiveHandler = () => setActive(false)

    const linksContainerClassName = `${s.linksContainer} ${active ? s.linksActive : ''}`
    const burgerClassName = `${s.burgerContainer} ${active ? s.activeBurgerContainer : ''}`

    return (
        <div className={s.mainContainer}>
            <div className={`${s_c.contentContainer} ${linksContainerClassName}`}>
                <div onClick={offActiveHandler}
                    style={{backgroundImage: `url(${x})`}} className={s.mark}>
                </div>
                <Link backgroundImage={vk}
                    href={'https://vk.com/salityy'}/>
                <Link backgroundImage={telegram}
                    href={'https://t.me/sality33'}/>
                <Link backgroundImage={instagram}
                    href={'https://www.instagram.com/the.sality/'}/>
                <Link backgroundImage={linkedIn}
                    href={'https://www.linkedin.com/in/maxim-ostapkevich-37073822b/'}/>
            </div>
            <div className={burgerClassName}>
                <div onClick={onActiveHandler}
                    style={{backgroundImage: `url(${burger})`}} className={s.burger}>
                </div>
            </div>
        </div>
    );
};

