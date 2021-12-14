import s_c from './../common/styles/Container.module.css'
import s from './Form.module.css'

export const Form = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${s_c.contentContainer} ${s.container}`}>
                <h2>Contact me</h2>
                <form action='' className={s.form}>
                    <input style={{marginBottom: '2%'}} type="text"/>
                    <input style={{marginBottom: '2%'}} type="text"/>
                    <textarea rows={7}></textarea>
                </form>
                <button> Submit</button>
            </div>
        </div>
    )
}