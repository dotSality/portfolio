import s from './ItemTitle.module.scss'
import {ReactNode} from 'react';

type ItemTitlePropsType = {
    title?: string
    children?: ReactNode
}

export const ItemTitle = (props: ItemTitlePropsType) => {
    return (
        <div>
            <h3 className={s.itemTitle}>{props.title}
                {props.children}
            </h3>
        </div>
    )
}