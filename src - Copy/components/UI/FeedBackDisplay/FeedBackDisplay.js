import React,{Component} from 'react'
import Aux from '../../../hoc/Auxo/Auxo'
import css from './FeedBackDisplay.css'
import Backdrop from '../BackDrop/BackDrop'
class FeedBackDisplay extends Component{
	
	render(){
		return(
			<Aux>
		<Backdrop show={this.props.show} clicked={this.props.backDropHandler}/>
		<div className={css.Modal} 
			style={{
				transform: this.props.show ? 'translateY(0)' : 'translateY(100vh)',
				opacity:this.props.show?'1':'0'
			}}>
		{this.props.children}
		</div>
		
		</Aux>

			)
	}
}



export default FeedBackDisplay