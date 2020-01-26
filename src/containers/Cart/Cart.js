import React,{Component} from 'react'
import css from './Cart.css'
import Item from './Item/Item'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
class Cart extends Component{
	CheckoutHandler=()=>{
		if(!this.props.isAuth==true){
			this.props.history.replace('/login')
		}
		else{
			this.props.history.replace('/pending')	
		}
	}
	render(){
		return(
			<div classname={css.Cart}>
				<div className={css.title}>Cart</div>
				<div><Item/></div>
				<div className={css.Checkout} onClick={this.CheckoutHandler}>Checkout</div>
			</div>
			)
	}
}
const mapStateToProps=(state)=>{
	return{
		isAuth:state.isAuth
	}
}
export default connect(mapStateToProps)(Cart)