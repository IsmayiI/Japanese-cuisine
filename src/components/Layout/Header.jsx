
import sushiImg from '../../assets/sushi.jpg'
import styles from './Header.module.css'

const { header, mainImage } = styles


const Header = () => {
   return (
      <>
         <header className={header}>
            <h1>Япона Кухня</h1>
            <button>Корзина</button>
         </header>
         <div className={mainImage} >
            <img src={sushiImg} alt="Суши" />
         </div>
      </>
   )
}

export default Header