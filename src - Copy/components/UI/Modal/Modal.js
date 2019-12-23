import React from 'react'
import Aux from '../../../hoc/Auxo/Auxo'
import ContentDescription from './ContentDescription/ContentDescription'
import BackDrop from '../BackDrop/BackDrop'
import css from './Modal.css'
const Modal=(props)=>{
		let attachedClass=[css.Modal]
	if(props.Error){
		attachedClass=[css.Modal,css.Error]
	}	
	return(
		<Aux>
		<BackDrop show={props.show} clicked={props.backDropHandler}/>
		<div className={attachedClass.join(' ')} 
			style={{
				transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
				opacity:props.show?'1':'0'
			}}>
			{props.children}

		</div>
		</Aux>
		);
}
export default Modal