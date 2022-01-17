import s from './ModalWindow.module.scss'

type ModalWindowPropsType = {
    active: boolean,
    setActive: (active: boolean) => void
    children: any
}

export const ModalWindow = ({active, setActive, children}: ModalWindowPropsType) => {
    const offActive = () => setActive(false)
    return (
        <div onClick={offActive} className={active ? `${s.active} ${s.modal}` : s.active}>
            <div className={s.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}