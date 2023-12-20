
import useValidateInput from '../../hooks/use-validate-input'
import styles from './SubmitOrder.module.css'
const { form, control, actions, invalid, submit } = styles

const SubmitOrder = ({ onHideCart, createDataSend }) => {

   const {
      enteredInput: enteredName,
      inputIsValid: nameIsValid,
      inputInvalid: nameInvalid,
      inputChangeHandler: nameChangeHandler,
      inputBlurHandler: nameBlurHandler,
      resetValues: resetNameValues
   } = useValidateInput(value => value.trim() !== '')

   const {
      enteredInput: enteredCity,
      inputIsValid: cityIsValid,
      inputInvalid: cityInvalid,
      inputChangeHandler: cityChangeHandler,
      inputBlurHandler: cityBlurHandler,
      resetValues: resetCityValues
   } = useValidateInput(value => value.trim() !== '')

   const {
      enteredInput: enteredAddress,
      inputIsValid: addressIsValid,
      inputInvalid: addressInvalid,
      inputChangeHandler: addressChangeHandler,
      inputBlurHandler: addressBlurHandler,
      resetValues: resetAddressValues
   } = useValidateInput(value => value.includes('@'))

   const isFormValid = nameIsValid && cityIsValid && addressIsValid


   const confirmOrderHandler = (e) => {
      e.preventDefault()

      if (!isFormValid) return

      const userInfo = {
         name: enteredName,
         city: enteredCity,
         address: enteredAddress
      }

      createDataSend(userInfo)

      resetNameValues()
      resetCityValues()
      resetAddressValues()
   }

   const nameStyle = nameInvalid ? `${control} ${invalid}` : control
   const cityStyle = cityInvalid ? `${control} ${invalid}` : control
   const addressStyle = addressInvalid ? `${control} ${invalid}` : control

   return (
      <form className={form} onSubmit={confirmOrderHandler} >
         <div className={nameStyle}>
            <label htmlFor="name">Введите ваше имя</label>
            <input
               type="text"
               id="name"
               value={enteredName}
               onChange={nameChangeHandler}
               onBlur={nameBlurHandler} />
         </div>
         <div className={cityStyle}>
            <label htmlFor="city">Введите название вашего города</label>
            <input
               type="text"
               id="city"
               value={enteredCity}
               onChange={cityChangeHandler}
               onBlur={cityBlurHandler} />
         </div>
         <div className={addressStyle}>
            <label htmlFor="address">Введите ваш адрес</label>
            <input
               type="text"
               id="address"
               value={enteredAddress}
               onChange={addressChangeHandler}
               onBlur={addressBlurHandler} />
         </div>
         <div className={actions}>
            <button type="button" onClick={onHideCart}>Отменить</button>
            <button className={submit}>Подтвердить заказ</button>
         </div>
      </form>
   )
}

export default SubmitOrder