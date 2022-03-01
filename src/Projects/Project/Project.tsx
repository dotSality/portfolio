import s from './Project.module.scss'
import {ItemTitle} from '../../common/components/Titles/h3/ItemTitle';
import {useState} from 'react';
import {ModalWindow} from '../../common/components/modal/ModalWindow';

type ProjectPropsType = {
    title: string,
    description: string,
    bgI: any,
}

export const Project = (props: ProjectPropsType) => {

    const [active, setActive] = useState<boolean>(false)
    const onActive = () => setActive(true)
    console.log(active)
    return (
        <div className={s.item}>
            <div style={{backgroundImage: `url(${props.bgI})`}} onClick={onActive}
                className={s.imageContainer}></div>
            <ItemTitle title={props.title}/>
            <ModalWindow active={active} setActive={setActive}>
                <div className={s.childrenImage}>

                </div>
                <span className={s.description}>{props.description}</span>
            </ModalWindow>
        </div>
    )
}