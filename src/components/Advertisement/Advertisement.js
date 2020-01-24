import React from 'react'
import css from './Advertisement.css'
import ad from '../../assets/ad.jpg'
import ad0 from '../../assets/ad1.jpg'
const Advertisement = ()=>{
	return(
		<div className={css.Advertisement}>
<<<<<<< HEAD
		<img className={css.AdImg} src='https://retailersapp.com/public/images/gallery/1557743273special-offer.gif'/>
		<img className={css.AdImg} src='https://i2.wp.com/dedipic.com/wp-content/uploads/2019/02/trump_bigLaugh.gif?fit=500%2C500&ssl=1'/>
=======
		<a href='http://nccs.edu.np/college/' target="_blank"><img className={css.ad1}  src={ad}/></a>
		<img className={css.ad0} src={ad0}/>
>>>>>>> b2575cda3de87f6b9cc49ad88b48a5693dda665b
		</div>
		)
}
export default Advertisement