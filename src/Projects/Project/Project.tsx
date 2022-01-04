import s from './Project.module.scss'
import {ItemTitle} from '../../common/components/Titles/h3/ItemTitle';

type StyleType = {
    backgroundImage: string
}

type ProjectPropsType = {
    title: string,
    description: string,
    style: StyleType,
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.item}>
            <div style={props.style} className={s.imageContainer}>
                <span className={s.previewButton}>Click to preview</span>
            </div>
            <ItemTitle title={props.title}/>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}