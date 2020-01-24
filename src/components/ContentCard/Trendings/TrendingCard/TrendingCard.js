import React,{Component} from 'react'
import css from './TrendingCard.css'
import Aux from '../../../../hoc/Auxo/Auxo'
import Modal from '../../../UI/Modal/Modal'
import ContentDescription from '../../../UI/Modal/ContentDescription/ContentDescription'

class TrendingCard extends Component {
	state={
		modal:false
	}
	modalHandler=()=>{
		this.setState({modal:true})
	}
	backDropHandler=()=>{
		this.setState({modal:false})
	}
	render(){
		return(
		<Aux>
		<Modal show={this.state.modal} backDropHandler={this.backDropHandler} >
						<ContentDescription clicked={this.backDropHandler} bookinfo={this.props.bookinfo}/>

			</Modal>
		<div className={css.TrendingCard}>
			<div className={css.ImageDiv}>
				<img className={css.Image} src={this.props.bookinfo.image}/>
			</div>	
			<div className={css.Details}>
				<div className={css.Title}>Title : {this.props.bookinfo.title}</div>
				<div className={css.Author}>Author : {this.props.bookinfo.author}</div>
				<div className={css.Price}>Price : {this.props.bookinfo.price} Rs</div>
				<div className={css.SeeMore} onClick={this.modalHandler}>See More >></div>

			</div>	


		</div>
		</Aux>
		)
	}
}
export default TrendingCard