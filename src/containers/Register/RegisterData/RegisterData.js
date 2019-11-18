import React,{Component} from 'react'
import	Spinner from '../../../components/UI/Spinner/Spinner'
import css from './RegisterData.css'
import axios from 'axios'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
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
					type:'text',
					placeholder:'Email'
				},
				value:'',
				validation:{
					required:true
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
			HouseNo:{
				elementType:'input',
				elementConfig:{
					type:'text',
					placeholder:'Home Number'
				},
				value:'',
				validation:{
					required:true,
					minLength:1,
					maxLength:10
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
	checkValidity=(value,rules)=>{
		let isValid=true
		if(rules.required){
			isValid=value.trim()!=='' && isValid;
		}
		if(rules.minLength){
			isValid=value.length >=rules.minLength && isValid;
		}
		if(rules.maxLength){
			isValid=value.length <=rules.maxLength && isValid;
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
export default RegisterData