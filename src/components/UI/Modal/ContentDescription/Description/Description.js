import React,{Component} from 'react'
import Modal from '../../Modal'
import css from './Description.css'
class Description extends Component{
	state={
		show:false
	}
	modalHandler=()=>{
		this.setState({
			show:true
		})
	}
	render(){
		return(
		<div className={css.Description}>
		<Modal show={this.state.show} Error >Added To Cart</Modal>
			<div className={css.div1}><strong>Details</strong></div>
			<div className={css.div2}><strong>Title :</strong> {this.props.bookinfo.title}</div>
			<div className={css.div3}><strong>Author :</strong> {this.props.bookinfo.author}</div>
			<strong>Description :</strong><div className={css.div4}> {this.props.bookinfo.description}</div>
			<div className={css.div5}><strong>Published Year :</strong> 2019<br/></div>
			<div className={css.div6}><strong>Price :</strong> Rs {this.props.bookinfo.price}/-</div>
			<div className={css.div7}>
					<div className={css.Cancel} onClick={this.props.clicked}>Cancel</div>
					<div className={css.Order} onClick={this.modalHandler}>Order</div>
			</div>
		</div>
		);
		}
}
export default Description