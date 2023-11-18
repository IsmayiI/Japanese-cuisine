
import styles from './Card.module.css'
const { card } = styles

const Card = (props) => {
   return (
      <div className={card}>
         {props.children}
      </div>
   )
}

export default Card