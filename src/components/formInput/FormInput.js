import React from 'react';

import classes from './FormInput.module.scss'

const formInput = ({changeHandler, label, ...otherProps}) => {
    const labelClasses = [otherProps.value.length?classes.shrink:'',classes['form-input-label']].join(' ');
    return (
        <div className={classes.group}>
            <input className={classes['form-input']} 
                onChange={changeHandler}
                {...otherProps}
            ></input>
            {label ? (<label className={labelClasses} >{label}</label>):null}
        </div>

    )
}

export default formInput;