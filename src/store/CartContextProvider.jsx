import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
   items: [],
   totalAmount: 0
}

const cartReducer = (state, action) => {
   switch (action.type) {
      case 'ADD_ITEM':
         return {
            items: [...state.items, action.item],
            totalAmount: state.totalAmount + (action.item.price * action.item.amount)
         }
      case 'REMOVE_ITEM':
         return {}
      default:
         break;
   }
   return defaultCartState
}



const CartContextProvider = (props) => {
   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

   const addItemHandler = (item) => {
      dispatchCartAction({
         type: 'ADD_ITEM',
         item,
      })
   }

   const removeItemHandler = (id) => {
      dispatchCartAction({
         type: 'REMOVE_ITEM',
         id,
      })
   }

   const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemHandler,
      removeItem: removeItemHandler
   }

   return (
      <CartContext.Provider value={cartContext}>
         {props.children}
      </CartContext.Provider>
   )
}

export default CartContextProvider