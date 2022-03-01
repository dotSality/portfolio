import s from './ModalWindow.module.scss'
import brown from '../../../assets/image/hovered-x.svg';

type ModalWindowPropsType = {
    active: boolean,
    setActive: (active: boolean) => void
    children: any
}

export const ModalWindow = ({active, setActive, children}: ModalWindowPropsType) => {

    const offActive = () => setActive(false)
    const modalClassName = `${s.modal} ${active ? s.modalActive : ''}`

    return (
        <div onClick={offActive} className={modalClassName}>
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