import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'

import styles from './HeaderCartButton.module.css'
const { button, icon, badge, bump } = styles


const HeaderCartButton = ({ onClick }) => {
   const cartContext = useContext(CartContext)

   const cartItemsNumber = cartContext.items.reduce((currentVal, item) => currentVal + item.amount, 0)

   return (
      <button className={button} onClick={onClick} >
         <span className={icon} ><CartIcon /></span>
         <span>Корзина</span>
         <span className={badge}>{cartItemsNumber}</span>
      </button>
   )
}

export default HeaderCartButton