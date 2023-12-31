import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
   items: [],
   totalAmount: 0
}

const cartReducer = (state, action) => {
   switch (action.type) {
      case 'ADD_ITEM':
         const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
         const existingCartItem = state.items[existingCartItemIndex]

         let updatedItem
         let updatedItems

         if (existingCartItem) {
            updatedItem = {
               ...existingCartItem,
               amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
         } else {
            updatedItems = [...state.items, action.item]
         }

         return {
            items: updatedItems,
            totalAmount: state.totalAmount + (action.item.price * action.item.amount)
         }


      case 'REMOVE_ITEM':
         const cartItemIndex = state.items.findIndex(item => item.id === action.id)
         const cartItem = state.items[cartItemIndex]

         let newUpdatedItems;
         if (cartItem.amount === 1) {
            newUpdatedItems = state.items.filter(item => item.id !== action.id)
         } else {
            const updatedItem = { ...cartItem, amount: cartItem.amount - 1 }
            newUpdatedItems = [...state.items]
            newUpdatedItems[cartItemIndex] = updatedItem
         }

         return {
            items: newUpdatedItems,
            totalAmount: state.totalAmount - cartItem.price
         }
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