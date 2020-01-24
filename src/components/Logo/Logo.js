import React from 'react'
import logo from '../../assets/sujan.jpg'
import css from './Logo.css'
const Logo=(props)=>{
	return(
		<div className={css.Logo}>
			<a className={css.logo} href="/"><img className={css.capture} src={logo}/></a>
		</div>
		);
}
export default Logo