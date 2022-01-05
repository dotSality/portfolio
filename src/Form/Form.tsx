import s_c from '../common/styles/Container.module.scss'
import s from './Form.module.scss'
import {Title} from '../common/components/Titles/h2/Title';
import {Input} from '../common/components/textfields/Input/Input';

export const Form = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${s_c.contentContainer} ${s.container}`}>
                <Title title={'Contact me'}/>
                <form className={s.form}>
                    <div className={s.inputs}>
                        <Input placeholderText={'Email*'}/>
                        <Input placeholderText={'Name*'}/>
                    </div>
                    <Input placeholderText={'Phone'}/>


                </form>
                <button> Submit</button>
            </div>
        </div>
    )
}