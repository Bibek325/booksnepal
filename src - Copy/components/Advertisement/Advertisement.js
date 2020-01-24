import React from 'react'
import css from './Advertisement.css'
const Advertisement = ()=>{
	return(
		<div className={css.Advertisement}>
		<img className={css.AdImg} src='https://media.giphy.com/media/HAWDYCNxr2HeM/giphy.gif'/>
		<img className={css.AdImg} src='https://media.giphy.com/media/zT5AnDBzsEtfa/giphy.gif'/>
		</div>
		)
}
export default Advertisement