import s from './Projects.module.scss'
import {Project} from './Project/Project';
import s_c from '../common/styles/Container.module.scss'
import {Title} from '../common/components/Titles/h2/Title';
import preview from './../assets/image/no-preview.jpg';

const Fade = require("react-reveal/Fade")

export const Projects = () => {

    return (
        <div id={'projects'} className={s.mainBlock}>
            <Fade clear>
                <div className={`${s_c.contentContainer} ${s.container}`}>
                    <Title title={'My projects'}/>
                    <div className={s.itemContainer}>
                        <Project bgI={preview} title={'Project 1'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                        ' Amet dolor dolore ea nam necessitatibus odit ratione r' +
                        'em, tempora vero? Consequatur facilis illum inc' +
                        'idunt magnam praesentium quidem voluptas! Aliquam mollitia, odio?\n'}/>
                        <Project bgI={preview} title={'Project 1'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                        ' Amet dolor dolore ea nam necessitatibus odit ratione r' +
                        'em, tempora vero? Consequatur facilis illum inc' +
                        'idunt magnam praesentium quidem voluptas! Aliquam mollitia, odio?\n'}/>
                        <Project bgI={preview} title={'Project 2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                        ' Amet dolor dolore ea nam necessitatibus odit ratione r' +
                        'em, tempora vero? Consequatur facilis illum inc' +
                        'idunt magnam praesentium quidem voluptas! Aliquam mollitia, odio?\n'}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}