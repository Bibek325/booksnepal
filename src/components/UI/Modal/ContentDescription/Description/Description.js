import React,{Component} from 'react'
import Modal from '../../Modal'
import { connect } from 'react-redux'
import css from './Description.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Spinner from '../../../Spinner/Spinner'
import {withRouter} from 'react-router-dom'
class Description extends Component{
	state={
		show:false,
	
		books:{}
	}
	orderHandler=()=>{
		
		axios.post('https://bookstore-12c74.firebaseio.com/cart.json',this.props.bookinfo)
		.then(res=>{
			alert("Successfully added to cart")
		})
		.catch(error=>{
			
		})





		
		

			}

	render(){
		
		console.log(this.state.books)
		return(
		<div className={css.Description}>
				
			<div className={css.div1}><strong>Details</strong></div>
			<div className={css.div2}><strong>Title :</strong> {this.props.bookinfo.title}</div>
			<div className={css.div3}><strong>Author :</strong> {this.props.bookinfo.author}</div>
			<strong>Description :</strong><div className={css.div4}> {this.props.bookinfo.description}</div>
			<div className={css.div5}><strong>Published Year :</strong> 2019<br/></div>
			<div className={css.div6}><strong>Price :</strong> Rs {this.props.bookinfo.price}/-</div>
			<div className={css.div7}>
					<div className={css.Cancel} onClick={this.props.clicked}>Cancel</div>
					<div className={css.Order} onClick={this.orderHandler}>Order</div>
			</div>
		</div>
		);
		}
}
const mapStateToProps=(state)=>{
	return{
		isAuth:state.isAuth
	}
}
export default connect(mapStateToProps)(withRouter(Description))
