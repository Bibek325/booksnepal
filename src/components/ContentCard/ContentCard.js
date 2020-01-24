import React,{Component} from 'react'
import	css from './ContentCard.css'
import Aux from '../../hoc/Auxo/Auxo'
import Modal from '../UI/Modal/Modal'
import ContentDescription from '../UI/Modal/ContentDescription/ContentDescription'
class ContentCard extends Component{
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
		console.log(this.props)
		return(
			<Aux>
			<Modal show={this.state.modal} backDropHandler={this.backDropHandler} >
						<ContentDescription clicked={this.backDropHandler} bookinfo={this.props.bookinfo}/>

			</Modal>
			<div className={css.ContentCard} >
				<div className={css.Image}>
				<img className={css.img} src={this.props.bookinfo.image}/>
				</div>
				<div className={css.Label}>
					<div className={css.title}>{this.props.bookinfo.title}</div>
					<div className={css.SoldBy}>Sold By : Bibek Lama</div>
					<div>Rs: {this.props.bookinfo.price}/-</div>
					<div onClick={this.modalHandler} className={css.SeeMore}>See More >></div>
				</div>
			</div>
</Aux>
			

		);
	}
	
}
export default ContentCard