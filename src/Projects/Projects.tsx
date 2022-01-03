import s from './Projects.module.css'
import {Project} from './Project/Project';
import s_c from './../common/styles/Container.module.css'
import {Title} from '../common/components/Titles/h2/Title';

export const Projects = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${s_c.contentContainer} ${s.container}`}>
                <Title title={'My projects'}/>
                <div className={s.itemContainer}>
                    <Project title={'Project 1'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                                                            ' Amet dolor dolore ea nam necessitatibus odit ratione r' +
                                                            'em, tempora vero? Consequatur facilis illum inc' +
                                                            'idunt magnam praesentium quidem voluptas! Aliquam mollitia, odio?\n'}/>
                    <Project title={'Project 2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                                                            ' Amet dolor dolore ea nam necessitatibus odit ratione r' +
                                                            'em, tempora vero? Consequatur facilis illum inc' +
                                                            'idunt magnam praesentium quidem voluptas! Aliquam mollitia, odio?\n'}/>
                </div>
            </div>
        </div>
    )
}