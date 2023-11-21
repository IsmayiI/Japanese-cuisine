import { useContext } from 'react'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'
const { mealStyle, descriptionStyle, priceStyle } = styles

const MealItem = ({ name, description, price, id }) => {
   const cartContext = useContext(CartContext)
   const formattedPrice = `$${price.toFixed(2)}`

   const addToCartHandler = (amount) => {
      cartContext.addItem({
         name,
         id,
         price,
         amount
      })
   }

   return (
      <li className={mealStyle}>
         <div >
            <h3 >{name}</h3>
            <div className={descriptionStyle} >{description}</div>
            <div className={priceStyle}>{formattedPrice}</div>
         </div >
         <div>
            <MealItemForm onAddToCart={addToCartHandler} id={id} />
         </div>
      </li>
   )
}

export default MealItem