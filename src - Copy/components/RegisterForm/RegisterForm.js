import React from 'react'
import RegisterData from '../../containers/Register/RegisterData/RegisterData'
import css from './RegisterForm.css'
const RegisterForm=(props)=>{
	return(
		<div className={css.RegisterForm}>
				<RegisterData RegisterHandler={props.RegisterHandler}/>		
		</div>
		);
}
export default RegisterForm