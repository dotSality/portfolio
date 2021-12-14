import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string,
    description: string,
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.item}>
            <div className={s.photo}>Photo</div>
            <h3 className={s.name}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}