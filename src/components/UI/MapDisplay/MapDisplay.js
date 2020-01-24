import React from 'react'
import Map from './Map/Map'
import Aux from '../../../hoc/Auxo/Auxo'
import map from '../../../assets/map.png'
import BackDrop from '../BackDrop/BackDrop'
import css from './MapDisplay.css'
const MapDisplay=(props)=>{
		let attachedClass=[css.Modal]
	if(props.Error){
		attachedClass=[css.Modal,css.Error]
	}	
	return(
		<Aux>
		<BackDrop show={props.show} clicked={props.backDropHandler}/>
		<div className={attachedClass.join(' ')} 
			style={{
				transform:props.show ? 'translateY(0)' : 'translateY(100vh)',
				opacity:props.show?'1':'0'
			}}>
			
			<Map/>
		</div>
		</Aux>
		);
}
export default MapDisplay