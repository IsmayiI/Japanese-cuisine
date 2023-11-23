import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import styles from './Cart.module.css'
import { useContext } from 'react'
import CartItem from './CartItem'
const { cartItemsStyle, total, actions, button, buttonAlt } = styles

const Cart = ({ onHideCart }) => {
   const cartContext = useContext(CartContext)
   const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
   const hasItems = cartContext.items.length > 0

   const addCartItemHandler = (item) => {
      cartContext.addItem({ ...item, amount: 1 })
   }

   const removeCartItemHandler = (id) => {
      cartContext.removeItem(id)
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

   return (
      <Modal onHideCart={onHideCart}>
         {cartItems}
         <div className={total}>
            <span>Итого</span>
            <span>{totalAmount}</span>
         </div>
         <div className={actions}>
            <button className={buttonAlt} onClick={onHideCart}>Закрыть</button>
            {hasItems && <button className={button}>Заказать</button>}
         </div>
      </Modal>
   )
}

export default Cart