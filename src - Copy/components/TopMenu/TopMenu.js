import React from 'react'
import Bottom from './Bottom/Bottom'
import Top from './Top/Top'
import css from './TopMenu.css'
const TopMenu=()=>{
	return(
		<div className={css.TopMenu}>
			<div className={css.Top}><Top/></div>
			<div className={css.Bottom}><Bottom/></div>
		</div>


		);
}
export default TopMenu