import React from 'react'
import css from './Logo.css'
const Logo=(props)=>{
	return(
		<div className={css.Logo}>
			<a className={css.logo} href="/">BookStore<sup className={css.sup}> NP</sup></a>
		</div>
		);
}
export default Logo