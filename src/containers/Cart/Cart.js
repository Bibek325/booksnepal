import React,{Component} from 'react'
import css from './Cart.css'
import Item from './Item/Item'
class Cart extends Component{
	render(){
		return(
			<div classname={css.Cart}>
				<div className={css.title}>Cart</div>
				<div><Item/></div>
				<div className={css.Checkout}>Checkout</div>
			</div>
			)
	}
}
export default Cart