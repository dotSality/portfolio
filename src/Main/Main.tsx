import s from './Main.module.css'
import s_c from './../common/styles/Container.module.css'

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