import React,{Component} from 'react'
import css from './Register.css'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import Aux from '../../hoc/Auxo/Auxo'
import ModalDisplay from '../../components/UI/ModalDisplay/ModalDisplay'
class Register extends Component{
	state={
		show:false
	}
	ModalDisplayHandler=()=>{
		this.setState({show:true})
	}
	backDropHandler=()=>{
		this.setState({show:false})	
	}
	RegisterHandler=()=>{
		alert('Register Successful');
		this.setState({show:false})
		
	}
	render(){
		return(
		<Aux>
		<ModalDisplay show={this.state.show} backDropHandler={this.backDropHandler}>
			<RegisterForm RegisterHandler={this.RegisterHandler}/>
		</ModalDisplay>
		<div className={css.Register} onClick={this.ModalDisplayHandler} >
			<i className="fa fa-user" aria-hidden="true"></i> Register
		</div>
		</Aux>
		);
	}
}
export default Register