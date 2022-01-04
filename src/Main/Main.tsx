import s from './Main.module.scss'
import s_c from '../common/styles/Container.module.scss'
import {Title} from '../common/components/Titles/h2/Title';
import {ItemTitle} from '../common/components/Titles/h3/ItemTitle';

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s_c.contentContainer}>
                <div className={s.introduction}>
                    <ItemTitle title={'Hello there'}/>
                    <Title title={'My name is Maxim'}/>
                    <ItemTitle title={'And i am front-end developer'}/>
                </div>
                <div className={s.photo}>PHOTO</div>
            </div>
        </div>
    )
}