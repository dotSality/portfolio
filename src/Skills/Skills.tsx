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
                        description={'Responsive design, links, headers, images and etc.'}/>
                    <Skill backgroundImage={skills.css} title={'SASS/SCSS'}
                        description={'Common CSS, variables, mixins, functions, pseudo-classes,' +
                        ' pseudo-elements, media queries'}/>
                    <Skill backgroundImage={skills.ts} title={'JS/TS'}
                        description={'Native JS: classes, functions, working with arrays' +
                        ' and objects, Promises, REST Api; TS: as type, generics, infer'}/>
                    <Skill backgroundImage={skills.react} title={'React'}
                        description={'Class and functional components, components\'s life-cycle methods, ' +
                        'props, hooks, HOC'}/>
                    <Skill backgroundImage={skills.redux} title={'Redux'}
                        description={'FLUX-concepted data flow, reducer, dispatch, redux-thunk, ' +
                        'redux-toolkit'}/>
                    <Skill backgroundImage={skills.storybook} title={'Storybook'}
                        description={'Testing components and modules, decorators'}/>
                    <Skill backgroundImage={skills.unitTest} title={'Unit-Test'}
                        description={'Testing choosen modules and the whole application\'s workability'}/>
                    <Skill backgroundImage={skills.git} title={'GIT'}
                        description={'Creating new repositories, push- and pull-requets, ' +
                        'merge, repos cloning'}/>
                    <Skill backgroundImage={skills.reactHook} title={'React-hook-form'}
                        description={'Forms, validations, submiting with server\'s responsing'}/>
                </div>
            </div>
        </div>
    )
}