import s_c from '../common/styles/Container.module.scss'
import s from './Form.module.scss'
import {Title} from '../common/components/Titles/h2/Title';
import {Input} from '../common/components/textfields/Input/Input';

const Fade = require("react-reveal/Fade")

export const Form = () => {
    return (
        <>
            <Fade>
                <div id={'contacts'} className={s.mainBlock}>
                    <div className={`${s_c.contentContainer} ${s.container}`}>
                        <Title title={'Contact me'}/>
                        <form className={s.form}>
                            <div className={s.inputs}>
                                <Input placeholderText={'Email*'}/>
                                <Input placeholderText={'Name*'}/>
                            </div>
                            <Input placeholderText={'Phone'}/>
                        </form>
                        <button className={s.button}>Send me a message</button>
                    </div>
                </div>
            </Fade>
        </>
    )
}