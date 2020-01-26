import React from 'react'
import css from './Advertisement.css'
import ad from '../../assets/ad.jpg'
import ad0 from '../../assets/cloud.jpg'
const Advertisement = ()=>{
	return(
		<div className={css.Advertisement}>
		<a href='http://nccs.edu.np/college/' target="_blank"><img className={css.ad1}  src={ad}/></a>
		<a href='https://www.cloudfactory.com.np/' target="_blank"><img className={css.ad0} src={ad0}/></a>
		</div>
		)
}
export default Advertisement