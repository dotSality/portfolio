import s from './Project.module.scss'
import {ItemTitle} from '../../common/components/Titles/h3/ItemTitle';
import {useState} from 'react';
import {ModalWindow} from '../../common/components/modal/ModalWindow';

type StyleType = {
    backgroundImage: string
}

type ProjectPropsType = {
    title: string,
    description: string,
    style: StyleType,
}

export const Project = (props: ProjectPropsType) => {

    const [active, setActive] = useState<boolean>(false)
    const onActive = () => setActive(true)

    return (
        <div className={s.item}>
            <div style={props.style} onClick={onActive}
                className={s.imageContainer}>
                <span className={s.previewButton}>Click to preview</span>
            </div>
            <ItemTitle title={props.title}/>
            <span className={s.description}>{props.description}</span>
            <ModalWindow active={active} setActive={setActive}>

            </ModalWindow>
        </div>
    )
}