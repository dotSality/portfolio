import s from './Title.module.scss';
import React from 'react';

type TitlePropsType = {
    title: string
}

export const Title = (props: TitlePropsType) => {
    return <div className={s.title}>
        <h2>{props.title}</h2>
    </div>
}