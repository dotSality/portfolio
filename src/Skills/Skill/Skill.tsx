import React from 'react';
import s from './Skill.module.scss'
import {ItemTitle} from '../../common/components/Titles/h3/ItemTitle';

type SkillPropsType = {
    title: string,
    description: string,
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.item}>
            <div className={s.photo}>Photo</div>
            <ItemTitle title={props.title}/>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}