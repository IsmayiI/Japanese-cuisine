import { useState } from "react"

const useValidateInput = (validateInputfunc) => {
   const [enteredInput, setEnteredInput] = useState('')
   const [wasTouchedInput, setWasTouchedInput] = useState(false)

   const inputIsValid = validateInputfunc(enteredInput)
   const inputInvalid = !inputIsValid && wasTouchedInput

   const inputChangeHandler = (e) => {
      setEnteredInput(e.target.value)
   }

   const inputBlurHandler = (e) => {
      setWasTouchedInput(true)
   }

   const resetValues = () => {
      setEnteredInput('')
      setWasTouchedInput(false)
   }

   return {
      enteredInput,
      wasTouchedInput,
      inputIsValid,
      inputInvalid,
      inputChangeHandler,
      inputBlurHandler,
      resetValues
   }

}

export default useValidateInput