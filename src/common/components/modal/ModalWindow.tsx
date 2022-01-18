import s from './ModalWindow.module.scss'
import grey from '../../../assets/image/grey-x.svg'
import brown from '../../../assets/image/hovered-x.svg';
import {useState} from 'react';

type ModalWindowPropsType = {
    active: boolean,
    setActive: (active: boolean) => void
    children: any
}

export const ModalWindow = ({active, setActive, children}: ModalWindowPropsType) => {

    const [hover, setHover] = useState<boolean>(false)
    const onHover = () => setHover(true)
    const offHover = () => setHover(false)

    const offActive = () => setActive(false)
    return (
        <div onClick={offActive} className={active ? `${s.active} ${s.modal}` : s.active}>
            <div className={s.content} onClick={e => e.stopPropagation()}>
                <div className={s.closeContainer}>
                    <div className={s.bufer} onClick={offActive}
                        onMouseEnter={onHover} onMouseLeave={offHover}>
                        <div style={{backgroundImage: `url(${hover ? brown : grey})`}}
                            className={s.close}></div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}