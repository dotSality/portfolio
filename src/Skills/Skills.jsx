import React from 'react';
import s_c from './../common/styles/Container.module.css'
import s from './Skills.module.css'
import {Skill} from './Skill/Skill';

export const Skills = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${s_c.contentContainer} ${s.skillContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.itemContainer}>
                    <Skill title={'Skill 1'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                                                        ' Amet dolor dolore ea nam necessitatibus odit ratione r' +
                                                        'em, tempora vero? Consequatur facilis illum inc' +
                                                        'idunt magnam praesentium quidem voluptas! Aliquam mollitia, odio?\n'}/>
                    <Skill title={'Skill 2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                                                        ' Amet dolor dolore ea nam necessitatibus odit ratione r' +
                                                        'em, tempora vero? Consequatur facilis illum inc' +
                                                        'idunt magnam praesentium quidem voluptas! Aliquam mollitia, odio?\n'}/>
                    <Skill title={'Skill 3'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                                                        ' Amet dolor dolore ea nam necessitatibus odit ratione r' +
                                                        'em, tempora vero? Consequatur facilis illum inc' +
                                                        'idunt magnam praesentium quidem voluptas! Aliquam mollitia, odio?\n'}/>
                </div>
            </div>
        </div>
    )
}