import Modal from '../UI/Modal'
import styles from './Cart.module.css'
const { cartItemsStyle, total, actions, button, buttonAlt } = styles

const Cart = () => {

   const cartItems = (
      <ul className={cartItemsStyle}>
         {[{ name: 'Sushi' }].map(item => <li>{item.name}</li>)}
      </ul>
   )

   return (
      <Modal>
         {cartItems}
         <div className={total}>
            <span>Итого</span>
            <span>49.50</span>
         </div>
         <div className={actions}>
            <button className={buttonAlt}>Закрыть</button>
            <button className={button}>Заказать</button>
         </div>
      </Modal>
   )
}

export default Cart