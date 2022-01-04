import s from './Link.module.scss'


type LinkPropsType = {
    backgroundImage: string,
    href: string,
}

export const Link = (props: LinkPropsType) => {
    return (
        <div className={s.link}>
            <a style={{backgroundImage: `url(${props.backgroundImage})`}}
            target={'_blank'} href={props.href}></a>
        </div>
    )
}