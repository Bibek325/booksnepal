import React,{Component} from 'react'
import css from './ItemShow.css'

class ItemShow extends Component{
	render(){
		console.log(this.props)
		return(
	<div className={css.ShowItem}>
			<div className={css.tit}>{this.props.item.title}</div>
					<div className={css.imgbi}><img className={css.imgbib} src={this.props.item.image}/></div>
					<div className={css.aut}>{this.props.item.author}</div>
					<div className={css.des}>1</div>
					<div className={css.pri}>{this.props.item.price}</div>
	</div>
			)
	}
}
export default ItemShow