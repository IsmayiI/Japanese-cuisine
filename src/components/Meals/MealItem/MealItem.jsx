import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'
const { mealStyle, descriptionStyle, priceStyle } = styles

const MealItem = ({ name, description, price, id }) => {
   const formattedPrice = `$${price.toFixed(2)}`

   return (
      <li className={mealStyle}>
         <div >
            <h3 >{name}</h3>
            <div className={descriptionStyle} >{description}</div>
            <div className={priceStyle}>{formattedPrice}</div>
         </div >
         <div>
            <MealItemForm id={id} />
         </div>
      </li>
   )
}

export default MealItem