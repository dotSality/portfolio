import s_c from './../common/styles/Container.module.css'
import s from './Form.module.css'
import {Title} from '../common/components/Titles/h2/Title';

export const Form = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${s_c.contentContainer} ${s.container}`}>
               <Title title={'Contact me'}/>
                <form className={s.form}>
                    <input style={{marginBottom: '2%'}} type="text"/>
                    <input style={{marginBottom: '2%'}} type="text"/>
                    <textarea rows={7}></textarea>
                </form>
                <button> Submit</button>
            </div>
        </div>
    )
}