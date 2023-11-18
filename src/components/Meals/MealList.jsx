import DUMMY_MEALS from '../../data/dummy-meals'

import styles from './MealList.module.css'
const { meals } = styles


const MealList = () => {

   const mealList = DUMMY_MEALS.map(meal => (
      <li>
         {meal.name}
      </li>
   ))

   return (
      <section className={meals} >
         <ul>
            {mealList}
         </ul>
      </section>
   )
}

export default MealList