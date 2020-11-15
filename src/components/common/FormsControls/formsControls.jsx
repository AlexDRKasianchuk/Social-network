import React from 'react';
import s from './formControls.module.css';

const FormControl = ({ input, meta,child, ...props })=>{
    const showError = meta.touched&& meta.error;
    return (
        <div className={s.formControl+ " " +(showError?s.error: "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
    {showError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = ({ input, meta, ...props }) => {
    const showError = meta.touched&& meta.error;
    return (
        <div className={s.formControl+ " " +(showError?s.error: "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
    {showError && <span>{meta.error}</span>}
        </div>
    )
}
export const Input = ({ input, meta, ...props }) => {
    const showError = meta.touched&& meta.error;
    return (
        <div className={s.formControl+ " " +(showError?s.error: "")}>
            <div>
                <input {...input} {...props} />
            </div>
    {showError && <span>{meta.error}</span>}
        </div>
    )
}
