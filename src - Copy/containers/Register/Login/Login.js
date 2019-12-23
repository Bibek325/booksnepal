import React,{Component} from 'react'
import css from './Login.css'
import LoginBar from './LoginBar/LoginBar'
import Aux from '../../../hoc/Auxo/Auxo'
import BackDrop from '../../../components/UI/BackDrop/BackDrop'
class Login extends Component{
	state={
		show:false
	}
	LoginBarToggleHandler=()=>{
		this.setState({show:true})
	}
	BackdropClickedHandler=()=>{
		this.setState({show:false})
	}
	render(){
		return(
		<Aux>
		<BackDrop show={this.state.show} clicked={this.BackdropClickedHandler}/>
		<LoginBar show={this.state.show}/>
		<div className={css.Login} onClick={this.LoginBarToggleHandler}>
			
			<i className="fa fa-sign-in" aria-hidden="true"></i> Login
		</div>
		</Aux>
		);
	}
}
export default Login