import React,{Component} from 'react'
import axios from 'axios'
import css from './Input.css'
import {Link} from 'react-router-dom'
class Input extends Component{
	state={
		title:'',
		image:'',
		author:'',
		description:'',
		publishedYear:'',
		category:'',
		price:'',
		titleCount:false,
		imageCount:false,
		authorCount:false,
		descriptionCount:false,
		publishedYearCount:false,
		categoryCount:false,
		priceCount:false,

	}
	inputHandler=(event,header)=>{
		switch(header){
			case 'title':{
				this.setState({
					title:event.target.value,
					titleCount:true
				})
				break;
			}
			case 'image':{
				this.setState({
					image:event.target.value,
					imageCount:true
				})
				break;
			}
			case 'author':{
				this.setState({
					author:event.target.value,
					authorCount:true				
				})
				break;
			}
			case 'description':{
				this.setState({
					description:event.target.value,
					descriptionCount:true				
				})
				break;
			}
			case 'publishedYear':{
				this.setState({
					publishedYear:event.target.value,
					publishedYearCount:true				
				})
				break;
			}
			case 'category':{
				this.setState({
					category:event.target.value,
					categoryCount:true				
				})
				break;
			}
			case 'price':{
				this.setState({
					price:event.target.value,
					priceCount:true				
				})
				break;
			}
		}
	}
	Submit=(event)=>{
		event.preventDefault();

		const books={
			image:this.state.image,
			title:this.state.title,
			author:this.state.author,
			description:this.state.description,
			publishedYear:this.state.publishedYear,
			category:this.state.category,
			price:this.state.price,
		}
		if(this.state.image||this.state.categoryCount||this.state.titleCount||this.state.authorCount||this.state.descriptionCount||this.state.publishedYearCount||this.state.price){
			axios.post('https://bookstore-12c74.firebaseio.com/BooksData.json',books)
		.then(res=>{
			alert("Successfully uploaded")
		})
		}
		else{
			alert("Please fill all the inputs then hit submit.")
		}

		
	}
	render(){
		console.log(this.state.count)
		return(
		<div className={css.Input}>
			<form onSubmit={this.Submit}>
			<div className={css.FormHeader}>Please fill the information below to post your old books:</div>
			<pre><div className={css.fields}>Title          : <input type='Text' onChange={(event)=>this.inputHandler(event,'title')}/></div>
			<div className={css.fields}>Author         : <input type='Text' onChange={(event)=>this.inputHandler(event,'author')}/></div>
			<div className={css.fields}>Description    : <input type='Text' onChange={(event)=>this.inputHandler(event,'description')}/></div>
			<div className={css.fields}>Published Year : <input type='Text' onChange={(event)=>this.inputHandler(event,'publishedYear')}/></div>
			<div className={css.fields}>Category       : <input type='Text' onChange={(event)=>this.inputHandler(event,'category')}/></div>
			<div className={css.fields}>Price          : <input type='Text' onChange={(event)=>this.inputHandler(event,'price')}/></div>
			<div className={css.fields}>     Image Link : <input className={css.Image} type='Text' placeholder="Copy paste the link of the image" onChange={(event)=>this.inputHandler(event,'image')}/></div></pre>
			<div onclic><input type='submit'/></div>
			</form>

		</div>
		)
	}
}
export default Input