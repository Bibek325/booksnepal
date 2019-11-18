import React from 'react'
import css from './TrendingCard.css'
const TrendingCard = (props) => {
	return(
		<div className={css.TrendingCard}>
			<div className={css.ImageDiv}>
				<img className={css.Image} src={props.bookinfo.image}/>
			</div>	
			<div className={css.Details}>
				<div className={css.Title}>Title : {props.bookinfo.title}</div>
				<div className={css.Author}>Author : {props.bookinfo.author}</div>
				<div className={css.Price}>Price : {props.bookinfo.price} Rs</div>
			</div>	


		</div>

		)
}
export default TrendingCard