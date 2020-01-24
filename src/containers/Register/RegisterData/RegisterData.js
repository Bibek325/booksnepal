import React,{Component} from 'react'
import	Spinner from '../../../components/UI/Spinner/Spinner'
import css from './RegisterData.css'
import axios from 'axios'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import * as action from '../../../store/action/auth'
import { connect } from 'react-redux'
class RegisterData extends Component{
	state={
		registerForm:{
			name:{
				elementType:'input',
				elementConfig:{
					type:'text',
					placeholder:'Your Name'
				},
				value:'',
				validation:{
					required:true
				},
				valid:false,
				touched:false
			},

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
			Address:{
				elementType:'input',
				elementConfig:{
					type:'text',
					placeholder:'Address'
				},
				value:'',
				validation:{
					required:true
				},
				valid:false,
				touched:false
			},
			Contact:{
				elementType:'input',
				elementConfig:{
					type:'text',
					placeholder:'Mobile Number'
				},
				value:'',
				validation:{
					required:true
				},
				valid:false,
				touched:false
			},
			
			gender:{
				elementType:'select',
				elementConfig:{
					options:[
					{value:'male',displayValue:'Gender : Male'},
					{value:'female',displayValue:'Gender : Female'},]
				},
				value:'',
				validation:{},
				valid:true,
				touched:false
			},
		},
		loading:false,
		formIsValid:false
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
	orderHandler=(event)=>{
		event.preventDefault();

		this.setState({
			loading:true
		});
		const formData={};
		for(let formElementIdentifier in this.state.registerForm){
			formData[formElementIdentifier]=this.state.registerForm[formElementIdentifier].value;
		}
		const registerData={
			ingredients:this.props.ingredients,
			price:this.props.price,
			registerForm:formData
		}
		axios.post('https://bookstore-12c74.firebaseio.com/RegisterData.json',formData)
		.then(res=>{
			this.setState({
				
				loading:false
			});
			
		})
		.catch(error=>{
			this.setState({
				
				loading:false
			});
		})
		this.submitHandler();

	}
	inputChangeHandler=(event,inputIdentifier)=>{
			const updatedOrderForm={...this.state.registerForm};
			const updatedFormElement={...updatedOrderForm[inputIdentifier]}
			updatedFormElement.value=event.target.value;
			updatedFormElement.valid=this.checkValidity(updatedFormElement.value,updatedFormElement.validation)
			updatedFormElement.touched=true;
			updatedOrderForm[inputIdentifier]=updatedFormElement;
			
			let formIsValid=true;
			for(let inputIdentifier in updatedOrderForm){
				formIsValid=updatedOrderForm[inputIdentifier].valid && formIsValid;
			}
			this.setState({
				registerForm:updatedOrderForm,
				formIsValid:formIsValid
			});
	
	}
	submitHandler =()=>{
		
		this.props.onAuth(this.state.registerForm.email.value,this.state.registerForm.password.value);
	}

	render(){
		const formElementsArray=[];
		for (let key in this.state.registerForm){
			formElementsArray.push({
				id:key,
				config:this.state.registerForm[key]
			});
		}
		let form=(<form onSubmit={this.orderHandler}>
				
				{formElementsArray.map(formElement=>(
					<Input 

							shouldValidate={formElement.config.validation}
							invalid={!formElement.config.valid}
							key={formElement.id}
							touched={formElement.config.touched}
							elementType={formElement.config.elementType}
							elementConfig={formElement.config.elementConfig}
							value={formElement.config.value}
							changed={(event)=>this.inputChangeHandler(event,formElement.id)}/>
					))}
				<Button clicked={this.props.RegisterHandler} btnType="Success" disabled={!this.state.formIsValid}>REGISTER</Button>
			</form>);
		if(this.state.loading){
			form=<Spinner/>
		}
		return(
			<div className={css.ContactData}>
			<h3>Enter your information</h3>
			{form}
			</div>
			);
	}
}
const mapDispatchToProps = (dispatch) =>{
	return {
		onAuth:(email,password) => dispatch(action.auth(email,password))
	}
}
export default connect(null,mapDispatchToProps)(RegisterData)