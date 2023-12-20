import { useEffect, useState } from 'react'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import spinner from '../../assets/spinner.svg'
import styles from './MealList.module.css'
const { meals, loading } = styles


const MealList = () => {
   const [mealsData, setMealsData] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(false)

   useEffect(() => {
      const fetchData = async () => {
         setIsLoading(true)
         try {
            const res = await fetch('https://react-http-7baee-default-rtdb.firebaseio.com/meals.json')
            if (!res.ok) throw new Error('Что то пошло не так...')
            const data = await res.json()
            setMealsData(Object.entries(data))
         } catch (e) {
            setError(true)
            console.log(e.message)
         }
         setIsLoading(false)
      }
      fetchData()
   }, [])

   if (error) {
      return (
         <section className={loading}>
            <h2>Что то пошло не так...</h2>
         </section>
      )
   }

   if (isLoading) {
      return (
         <section className={loading}>
            <img src={spinner} alt="#" />
         </section>
      )
   }



   const mealList = mealsData.map(meal => (
      <MealItem
         key={meal[0]}
         id={meal[0]}
         {...meal[1]}
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