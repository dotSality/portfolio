import React from 'react';
import s from './CustomInput.module.scss'

type CustomInputPropsType = {
    placeholderText?: string,
    customClassName?: string,
    // field: 'input' | 'textarea'
}

export const Input: React.FC<CustomInputPropsType> = (
    {
        customClassName,
        placeholderText,
        // field
    }
) => {
    const finalClassName = `${s.input} ${customClassName && customClassName}`
    return (
        <div className={s.container}>
            <input required type={'text'} className={finalClassName}/>
            {placeholderText && <span  className={s.movingSpan}>{placeholderText}</span>}
        </div>
    )
}