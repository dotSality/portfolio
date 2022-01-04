import s from './Project.module.css'
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
                <a href={''} className={s.previewButton}>Click to preview</a>
            </div>
                <ItemTitle title={props.title}/>
                <span className={s.description}>
                    {props.description}
                </span>
        </div>
    )
}