
import Input from '../../UI/Input'
import styles from './MealItemForm.module.css'
const { formStyle } = styles


const MealItemForm = () => {
   return (
      <form className={formStyle}>
         <Input
            label="количество"
            input={{
               id: 'amount',
               type: "number",
               min: '1',
               step: '1',
               defaultValue: '1'
            }}
         />
         <button>Добавить</button>
      </form>
   )
}

export default MealItemForm