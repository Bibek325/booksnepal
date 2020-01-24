import React from 'react'
import css from './MenuItem.css'
import {NavLink} from 'react-router-dom'
const MenuItem=(props)=>{
	return(
		<div className={css.MenuItem} onClick={props.clicked}>
		<NavLink 
		to={props.item.path}
		exact
		
		activeClassName={css.active}>
			<i className={props.item.icon}></i> {props.item.label}
		</NavLink>
		</div>
		);
}
export default MenuItem