import s from './Title.module.scss';
import React from 'react';

type TitlePropsType = {
    title?: string
    children?: React.ReactNode
}

export const Title = (props: TitlePropsType) => {
    return <div className={s.title}>
        <h2>{props.title}
            {props.children}</h2>
    </div>
}