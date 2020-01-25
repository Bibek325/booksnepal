import React,{Component} from 'react'
import css from './LoginBar.css'
import Spinner from '../../../../components/UI/Spinner/Spinner'

import Input from '../../../../components/UI/Input/Input'
import Button from '../../../../components/UI/Button/Button'
import BackDrop from '../../../../components/UI/BackDrop/BackDrop'
import * as action from '../../../../store/action/auth'
import { connect } from 'react-redux'
import Aux from '../../../../hoc/Auxo/Auxo'
class LoginBar extends Component{
	state={
		controls:{
			email:{
				elementType:'input',
				elementConfig:{
					type:'email',
					placeholder:'Email',
					
				},
				value:'',
				validation:{
					required:true,
					isEmail:true
				},
				valid:false,
				touched:false
			},
			password:{
				elementType:'input',
				elementConfig:{
					type:'password',
					placeholder:'Password'
				},
				value:'',
				validation:{
					required:true,
					minLength:6
				},
				valid:false,
				touched:false
			},
		}
	}

	 checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

	inputChangeHandler=(event, controlName)=>{
		const updatedControls = {
			...this.state.controls,
			[controlName]:{
				...this.state.controls[controlName],
				value:event.target.value,
				valid:this.checkValidity(event.target.value, this.state.controls[controlName].validation),
				touched:true
			}}
			this.setState({controls:updatedControls})
		}
	
	submitHandler =(event)=>{
		event.preventDefault();
		this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value);
	}
	render(){
		let attachedClass=[css.LoginBar,css.Close]
	if(this.props.show){
		attachedClass=[css.LoginBar,css.Open]
	}
	const formElementsArray=[];
		for (let key in this.state.controls){
			formElementsArray.push({
				id:key,
				config:this.state.controls[key]
			});
		}
		let form = formElementsArray.map(formElement =>(
			<Input 
				key={formElement.id}
				shouldValidate={formElement.config.validation}
				invalid={!formElement.config.valid}
				key={formElement.id}
				touched={formElement.config.touched}
				elementType={formElement.config.elementType}
				elementConfig={formElement.config.elementConfig}
				value={formElement.config.value}
				changed={(event)=>this.inputChangeHandler(event,formElement.id)}
			/>
			))
		if(this.props.loading){
			form=<Spinner/>
		}
		let errorMessage = null;
		if(this.props.error){
			errorMessage=<p>EMAIL AND PASSWORD DID NOT MATCH </p>
		}
	return(
		<Aux>
		
		<div className={attachedClass.join(' ')}>
			<form onSubmit={this.submitHandler}>
			{errorMessage}
				{form}
				
				<button className="Button">Login</button>
				
			</form>
		</div>
		</Aux>
		);
	}
}
const mapStateToProps=(state)=>{
	return{
		loading:state.loading,
		error:state.error,
		token:state.token
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		onAuth:(email,password) => dispatch(action.authLogin(email,password))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginBar)