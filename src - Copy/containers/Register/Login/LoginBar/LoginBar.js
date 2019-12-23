import React from 'react'
import css from './LoginBar.css'
import BackDrop from '../../../../components/UI/BackDrop/BackDrop'
import Aux from '../../../../hoc/Auxo/Auxo'
const LoginBar=(props)=>{
	let attachedClass=[css.LoginBar,css.Close]
	if(props.show){
		attachedClass=[css.LoginBar,css.Open]
	}
	return(
		<Aux>
		
		<div className={attachedClass.join(' ')}>
			<div className={css.LoginBarItems0}><strong>Please Login</strong></div>
			<div className={css.LoginBarItems1}><input className={css.Input} type='text' placeholder='Username'/></div>
			<div className={css.LoginBarItems2}><input className={css.Input} type='text' placeholder='Password'/></div>
			<button className={css.LoginBarItems3}><strong>Login</strong></button>
		</div>
		</Aux>
		);
}
export default LoginBar