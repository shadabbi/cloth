import React from 'react';
import classes from './CustomBtn.module.scss'
const Btn = ({children,isGoogleSingIn, inverted, ...otherProps}) => {
    const btnClasses = [isGoogleSingIn?classes['google-sign-in']:''
    ,classes['custom-button'],inverted?classes.inverted:''].join(' ')
    return (
        <button className={btnClasses} {...otherProps}>
            {children}
        </button>
    )
}

export default Btn;