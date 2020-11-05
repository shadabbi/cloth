import React from 'react';

import classes from './DropCartItem.module.scss';

const DropCartItem = (props) => {
    return (
        <div className={classes['cart-item']}>
            <img src={props.imageUrl} alt='lsfk'></img>
            <div className={classes['item-details']}>
                <span className={classes.name}>{props.name}</span>
                <span className={classes.price}>{props.quantity} X ${props.price}</span>
            </div>
        </div>
    )
}

export default DropCartItem;