import React from 'react'
import {Link} from 'react-router-dom'
import css from './TopBar.css'
const TopBar=()=>{
	const date=new Date();
	const time=date.getHours()+':'+date.getMinutes();
	return(
		
				<div className={css.TopBar}>
						<div className={css.Date}></div>
						<div>
						
						</div>

				</div>
		);
}
export default TopBar
