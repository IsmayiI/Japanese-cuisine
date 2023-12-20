import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import styles from './Cart.module.css'
import { useContext, useEffect, useState } from 'react'
import CartItem from './CartItem'
import SubmitOrder from './SubmitOrder'
const { cartItemsStyle, total, actions, button, buttonAlt } = styles

const Cart = ({ onHideCart }) => {
   const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false)

   const cartContext = useContext(CartContext)
   const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
   const hasItems = cartContext.items.length > 0



   const addCartItemHandler = (item) => {
      cartContext.addItem({ ...item, amount: 1 })
   }

   const removeCartItemHandler = (id) => {
      cartContext.removeItem(id)
   }

   const orderHandler = () => {
      setIsSubmitOrderAvailable(true)
   }

   const createDataSend = async (userInfo) => {
      const data = {
         meals: cartContext.items,
         user: userInfo
      }

      const res = await fetch('https://react-http-7baee-default-rtdb.firebaseio.com/orders.json', {
         method: 'POST',
         body: JSON.stringify(data)
      })

   }


   const cartItems = (
      <ul className={cartItemsStyle}>
         {cartContext.items.map(item => {
            return < CartItem
               key={item.id}
               onAdd={addCartItemHandler.bind(null, item)}
               onRemove={removeCartItemHandler.bind(null, item.id)}
               {...item} />
         })}
      </ul>
   )

   const modalButtons = (
      <div className={actions}>
         <button className={buttonAlt} onClick={onHideCart}>Закрыть</button>
         {hasItems && <button className={button} onClick={orderHandler} >Заказать</button>}
      </div>
   )

   return (
      <Modal onHideCart={onHideCart}>
         {cartItems}
         <div className={total}>
            <span>Итого</span>
            <span>{totalAmount}</span>
         </div>
         {isSubmitOrderAvailable && <SubmitOrder createDataSend={createDataSend} onHideCart={onHideCart} />}
         {!isSubmitOrderAvailable && modalButtons}
      </Modal>
   )
}

export default Cart