import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    checked: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={s.container}>
            <div className={`${s.btn} ${props.checked && s.on}`}>on</div>
            <div className={`${s.btn} ${!props.checked && s.off}`}>off</div>
            <div className={`${s.checked} ${props.checked && s.on || s.off}`}></div>
        </div>
    );
};

