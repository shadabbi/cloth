
import {toggleCartDropdown, addItemToCart, removeItemFromCart, incItemQuantity, decItemQuantity} from './cartDropdownType';
import {quantityUp, quantityDown, removeItem} from './cart.util'

const INITIAL_STATE = {
    isVisible:false,
    items:[],
} 

const cartDropdownReducer = (state=INITIAL_STATE, action) => {

    switch (action.type) {
        case toggleCartDropdown.SET_CART_VISIBILTY:
            return ({
                ...state,
                isVisible:action.payload
            })

        case addItemToCart.ADD_ITEM_TO_CART:
        return ({
            ...state,
            items:quantityUp(state.items, action.payload)
        })

        case removeItemFromCart.REMOVE_ITEM :
            return ({
                ...state,
                items:removeItem(state.items, action.payload)
            })
        case incItemQuantity.INC_QUANTITY :
            return ({
                ...state,
                items:quantityUp(state.items, action.payload)
            })
        case decItemQuantity.DEC_QUANTITY :
            return ({
                ...state,
                items:quantityDown(state.items, action.payload)
            })

    
        default:
           return state
    }
}

export default cartDropdownReducer;