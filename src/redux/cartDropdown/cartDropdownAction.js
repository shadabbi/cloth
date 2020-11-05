
import {toggleCartDropdown, addItemToCart, removeItemFromCart, incItemQuantity, decItemQuantity} from './cartDropdownType'

export const setCartDropdownState = (isVisible) => 
    (
        {
            type:toggleCartDropdown.SET_CART_VISIBILTY,
            payload:isVisible
        }
    )

export const addItemToCartAction = (item) => (
    {
        type:addItemToCart.ADD_ITEM_TO_CART,
        payload:item
    }   
) 

export const removeItem = (item) => (
    {
        type:removeItemFromCart.REMOVE_ITEM,
        payload:item
    }   
) 


export const incQuantity = (item) => (
    {
        type:incItemQuantity.INC_QUANTITY,
        payload:item
    }   
) 
export const decQuantity = (item) => (
    {
        type:decItemQuantity.DEC_QUANTITY,
        payload:item
    }   
) 


