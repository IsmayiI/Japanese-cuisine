
import sushiImg from '../../assets/sushi.jpg'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const { header, mainImage } = styles


const Header = ({ onShowCart }) => {
   return (
      <>
         <header className={header}>
            <h1>Япона Кухня</h1>
            <HeaderCartButton onClick={onShowCart} />
         </header>
         <div className={mainImage} >
            <img src={sushiImg} alt="Суши" />
         </div>
      </>
   )
}

export default Header