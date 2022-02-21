import s_c from '../common/styles/Container.module.scss'
import s from './Footer.module.scss'
import {ItemTitle} from '../common/components/Titles/h3/ItemTitle';


export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${s_c.contentContainer} ${s.container}`}>
                <ItemTitle>
                    Copyright © {new Date().getFullYear()} <br/> All rights reserved
                </ItemTitle>
            </div>
        </div>
    )
}