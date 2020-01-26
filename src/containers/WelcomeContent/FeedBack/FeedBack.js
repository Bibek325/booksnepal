import React,{Component} from 'react'
import css from './FeedBack.css'
import axios from 'axios'
class FeedBack extends Component{
	state:{
		name:'',
		message:''
	}
	orderHandler=(event)=>{
		

		
		
		const FeedBack={
			name:this.state.name,
			message:this.state.message
		}
		axios.post('https://bookstore-12c74.firebaseio.com/FeedBack.json',FeedBack)
		.then(res=>{
		
				alert('Your FeedBack has been succesfully registered. Thank you')	
							
		
			
		})
		.catch(error=>{
			this.setState({
				
				
			});
		})

	}
	inputNameChangeHandler=(event)=>{
		const name = event.target.value
		this.setState({
			name:name
		})

	}
	inputMessageChangeHandler=(event)=>{
		const msg = event.target.value
		this.setState({
			message:msg
		})

	}
	render(){

		return(
			<div>
			<strong>FeedBack</strong>
				<form onSubmit={this.orderHandler}>
				<div className={css.Name}>Name:<input className={css.Text} type='textarea' onChange={(event)=>this.inputNameChangeHandler(event)}/></div>
				<div className={css.Description}>Message:<textarea className={css.TextArea} onChange={(event)=>this.inputMessageChangeHandler(event)} rows='4'/></div>
				<input onClick={this.props.backDropHandler} type='submit'className={css.submit}></input>
				</form>
			</div>
			);
	}
}
export default FeedBack