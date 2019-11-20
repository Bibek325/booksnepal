import React from 'react'
import css from './FeedBackShow.css'

const FeedBackShow=(props)=>{
	return(
		<div className={css.FeedBackShow}>
				<div className={css.Name}><strong>Name :</strong> {props.item.name}</div>
				<div className={css.Message}><strong>Message :</strong> {props.item.message}</div>
		</div>
		)
}
export default FeedBackShow