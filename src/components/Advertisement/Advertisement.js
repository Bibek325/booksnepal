import React from 'react'
import css from './Advertisement.css'
const Advertisement = ()=>{
	return(
		<div className={css.Advertisement}>
		<img className={css.AdImg} src='https://retailersapp.com/public/images/gallery/1557743273special-offer.gif'/>
		<img className={css.AdImg} src='https://i2.wp.com/dedipic.com/wp-content/uploads/2019/02/trump_bigLaugh.gif?fit=500%2C500&ssl=1'/>
		</div>
		)
}
export default Advertisement