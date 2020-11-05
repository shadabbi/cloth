import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import Btn from '../customBtn/CustomBtn';
import classes from './CartDropDown.module.scss';
import DropCartItem from '../dropCartItem/DropCartItem';
import {setCartDropdownState} from '../../redux/cartDropdown/cartDropdownAction'


const CartDropDown = ({cartItems, history, cartDropdownVisiblety, setCartDropdownState}) => {
            console.log(cartItems.length)
    return (
        <div className={classes['cart-dropdown']} >
            <div className={classes['cart-items']}>
               
                    {cartItems.length > 0 ?
                                cartItems.map(item=><DropCartItem key={item.id} {...item}/>)
                                :<span className={classes.empty}>Cart is empty</span>
                            }
               
               
            </div>
            <Btn onClick={()=>{
                history.push('/checkout')
                setCartDropdownState(!cartDropdownVisiblety)
            }}>GO TO CHEACKOUT</Btn>
        </div>
    )
}


const mapStateToProps = state => {
    console.log('dropdown')
    return ({
        cartItems:state.cartDropdownVisiblety.items,
        cartDropdownVisiblety:state.cartDropdownVisiblety.isVisible
    })
}

const mapDispatchToProps = dispatch => {
    return {
        setCartDropdownState:data => dispatch(setCartDropdownState(data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropDown));