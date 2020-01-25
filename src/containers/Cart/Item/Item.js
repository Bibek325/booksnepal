import React,{Component} from 'react'
import css from './Item.css'
import axios from 'axios'
import ItemShow from './ItemShow/ItemShow'

class Item extends Component{
	state={
		cartData:[],
		loading:true
	}
	componentWillMount(){
		axios.get('https://bookstore-12c74.firebaseio.com/cart.json')
		.then(res=>{
			const fetchCart=[];
			for(let key in res.data){
				fetchCart.push({
					...res.data[key],
					id:key
				})

			}
			this.setState({cartData:fetchCart});
			
		})
			
	}
	render(){
		console.log(this.state.cartData)
		return(
			<div className={css.Item}>
				<div className={css.One}>
					<div className={css.tit}>Title</div>
					<div className={css.img}>Image</div>
					<div className={css.aut}>Author</div>
					<div className={css.des}>Quantity</div>
					<div className={css.pri}>Price</div>
				</div>
				<div className={css.Two}>
				
					<div className={css.FeedBackDisplay}>	{this.state.cartData.map(cartData=>(
			
					<ItemShow item={cartData}/>
					
			))}
			</div>
				</div>
				<div className={css.Three}></div>
			</div>
			)
	}
}
export default Item