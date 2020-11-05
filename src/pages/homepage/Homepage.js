import React from 'react';
import classes from  './Homepage.module.scss'
import Directory from '../../components/directory/Directory'

const homepage = () => {
    return (
        <div className={classes.homepage}>
            <Directory/>
        </div>
    )
}

export default homepage;