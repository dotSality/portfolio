import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './CustomInput.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type CustomInputPropsType = DefaultInputPropsType & {
    placeholderText?: string,
    customClassName?: string,
}

export const Input: React.FC<CustomInputPropsType> = (
    {
        customClassName,
        placeholderText,
        ...restProps
    }
) => {
    const finalClassName = `${s.input} ${customClassName && customClassName}`
    return (
        <div className={s.container}>
            <input {...restProps} required type={'text'} className={finalClassName}/>
            {placeholderText && <span  className={s.movingSpan}>{placeholderText}</span>}
        </div>
    )
}