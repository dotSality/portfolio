import s from './Project.module.css'
import {ItemTitle} from '../../common/components/Titles/h3/ItemTitle';

type ProjectPropsType = {
    title: string,
    description: string,
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.item}>
            <div className={s.imageContainer}>
                <a href={''} className={s.previewButton}>Click to preview</a>
            </div>
            <div className={s.description}>
                <ItemTitle title={props.title}/>
                <span className={s.description}>
                    {props.description}
                </span>
            </div>
        </div>
    )
}