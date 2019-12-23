import React from 'react'
import css from './SideDrawer.css'
import BackDrop from '../UI/BackDrop/BackDrop'
import Aux from '../../hoc/Auxo/Auxo'
const SideDrawer=(props)=>{
	let attachedClass=[css.SideDrawer,css.Close]
	if(props.show){
		attachedClass=[css.SideDrawer,css.Open]
	}
	return(
		<Aux>
		<BackDrop show={props.show} clicked={props.clicked}/>
		<div className={attachedClass.join(' ')}>
			<div className={css.SideDrawerItems}>Book</div>
			<div className={css.SideDrawerItems}>E-book</div>
			<div className={css.SideDrawerItems}>Second Hand</div>
		</div>
		</Aux>
		);
}
export default SideDrawer