import React from 'react'
import css from './BackDrop.css'
const Backdrop=(props)=>(
	props.show ? <div onClick={props.clicked} className={css.Backdrop}></div> : null

	);
export default Backdrop