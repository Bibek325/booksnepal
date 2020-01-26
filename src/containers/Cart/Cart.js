import React,{Component} from 'react'
import css from './Cart.css'
import Item from './Item/Item'
import { connect } from 'react-redux'
class Cart extends Component{
	CheckoutHandler=()=>{
		if(!this.props.isAuth){
			this.props.history.replace('/login')
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