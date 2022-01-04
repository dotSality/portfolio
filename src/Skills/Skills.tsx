import React from 'react';
import s_c from '../common/styles/Container.module.scss'
import s from './Skills.module.scss'
import {Skill} from './Skill/Skill';
import {Title} from '../common/components/Titles/h2/Title';
import {skills} from '../assets/image/imports/skillsPaths';

export const Skills = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${s_c.contentContainer} ${s.skillContainer}`}>
                <Title title={'My skills'}/>
                <div className={s.itemContainer}>
                    <Skill backgroundImage={skills.html} title={'HTML5'}
                        description={''}/>
                    <Skill backgroundImage={skills.css} title={'CSS, SCSS'}
                        description={''}/>
                    <Skill backgroundImage={skills.ts} title={'JS/TS'}
                        description={''}/>
                    <Skill backgroundImage={skills.react} title={'React.js'}
                        description={''}/>
                    <Skill backgroundImage={skills.redux} title={'Redux'}
                        description={''}/>
                    <Skill backgroundImage={skills.storybook} title={'Storybook'}
                        description={''}/>
                    <Skill backgroundImage={skills.unitTest} title={'Unit-Test'}
                        description={''}/>
                    <Skill backgroundImage={skills.git} title={'GIT'}
                        description={''}/>
                </div>
            </div>
        </div>
    )
}