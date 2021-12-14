import s from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={s.item}>
            <div className={s.imageContainer}>
                <a href={''} className={s.previewButton}>Click to preview</a>
            </div>
            <div className={s.description}>
                <h3 style={{margin: '1% 0'}}>{props.title}</h3>
                <h4 style={{margin: '3% 0'}}>
                    {props.description}
                </h4>
            </div>
        </div>
    )
}