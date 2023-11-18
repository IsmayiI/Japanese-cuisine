import DUMMY_MEALS from '../../data/dummy-meals'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

import styles from './MealList.module.css'
const { meals } = styles


const MealList = () => {

   const mealList = DUMMY_MEALS.map(meal => (
      <MealItem
         key={meal.id}
         {...meal}
      />
   ))

   return (
      <section className={meals} >
         <Card>
            <ul>
               {mealList}
            </ul>
         </Card>
      </section>
   )
}

export default MealList