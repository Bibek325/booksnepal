import React,{Component} from 'react'
import axios from 'axios'
import css from './Input.css'
class Input extends Component{
	state={
		title:'',
		author:'',
		description:'',
		publishedYear:'',
		price:''

	}
	inputHandler=(event,header)=>{
		switch(header){
			case 'title':{
				this.setState({
					title:event.target.value				
				})
				break;
			}
			case 'author':{
				this.setState({
					author:event.target.value				
				})
				break;
			}
			case 'description':{
				this.setState({
					description:event.target.value				
				})
				break;
			}
			case 'publishedYear':{
				this.setState({
					publishedYear:event.target.value				
				})
				break;
			}
			case 'price':{
				this.setState({
					price:event.target.value				
				})
				break;
			}
		}
	}
	Submit=()=>{
		const books={
			title:this.state.title,
			author:this.state.author,
			description:this.state.description,
			publishedYear:this.state.publishedYear,
			price:this.state.price,
		}
		axios.post('https://bookstore-12c74.firebaseio.com/BooksData.json',books)
		.then(res=>{})

		
	}
	render(){
		
		return(
		<div className={css.Input}>
			<form onSubmit={this.Submit}>
			<div>Please fill the information below:</div>
			<div>Title : <input type='Text' onChange={(event)=>this.inputHandler(event,'title')}/></div>
			<div>Author : <input type='Text' onChange={(event)=>this.inputHandler(event,'author')}/></div>
			<div>Description : <input type='Text' onChange={(event)=>this.inputHandler(event,'description')}/></div>
			<div>Published Year : <input type='Text' onChange={(event)=>this.inputHandler(event,'publishedYear')}/></div>
			<div>Price : <input type='Text' onChange={(event)=>this.inputHandler(event,'price')}/></div>
			<div><input type='submit'/></div>
			</form>

		</div>
		)
	}
}
export default Input