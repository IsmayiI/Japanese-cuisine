import ReactDOM from 'react-dom'
import styles from './Modal.module.css'
const { backdrop, modal, content } = styles

const portalElement = document.getElementById('overlays')


const Backdrop = ({ onClick }) => {
   return (
      <div className={backdrop} onClick={onClick}></div>
   )
}

const ModalWindow = (props) => {
   return (
      <div className={modal}>
         <div className={content}>
            {props.children}
         </div>
      </div>
   )
}

const Modal = (props) => {
   return (
      <>
         {ReactDOM.createPortal(<Backdrop onClick={props.onHideCart} />, portalElement)}
         {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
      </>
   )
}

export default Modal