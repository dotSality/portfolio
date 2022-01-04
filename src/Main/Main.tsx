import s from './Main.module.scss'
import s_c from '../common/styles/Container.module.scss'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s_c.contentContainer}>
                <div className={s.introduction}>
                    <span>Hello</span>
                    <h1>My name is Maxim</h1>
                </div>
                <div className={s.photo}>PHOTO</div>
            </div>
        </div>
    )
}