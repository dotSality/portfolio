import s from './ItemTitle.module.scss'

type ItemTitlePropsType = {
    title: string
}

export const ItemTitle = (props: ItemTitlePropsType) => {
    return (
        <div>
            <h3 className={s.itemTitle}>{props.title}</h3>
        </div>
    )
}