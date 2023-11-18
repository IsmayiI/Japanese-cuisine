import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'

const { button, icon, badge, bump } = styles


const HeaderCartButton = () => {
   return (
      <button className={button} >
         <span className={icon} ><CartIcon /></span>
         <span>Корзина</span>
         <span className={badge}>0</span>
      </button>
   )
}

export default HeaderCartButton