import s from './ModalWindow.module.scss'
import brown from '../../../assets/image/hovered-x.svg';

type ModalWindowPropsType = {
    active: boolean,
    setActive: (active: boolean) => void
    children: any
}

export const ModalWindow = ({active, setActive, children}: ModalWindowPropsType) => {

    const offActive = () => setActive(false)
    return (
        <div onClick={offActive} className={active ? `${s.active} ${s.modal}` : s.modal}>
            <div className={s.content} onClick={e => e.stopPropagation()}>
                <div className={s.closeContainer}>
                    <div className={s.bufer} onClick={offActive}>
                        <div style={{backgroundImage: `url(${brown})`}}
                            className={s.close}></div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}