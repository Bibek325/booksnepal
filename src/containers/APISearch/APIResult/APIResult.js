import React,{Component} from 'react'
import Spinner from '../../../components/UI/Spinner/Spinner'
import css from './APIResult.css'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
class APIResult extends Component{
	state={
		title:'',
		author:'',
		thumbnail:'',
		published:'',
		search:'sun',
		loading:true
	}
	componentDidUpdate(prevProps){
		console.log(prevProps.location.pathname)
		console.log(this.props.location.pathname)
		if(this.props.location!==prevProps.location){
			this.setState({loading:true,search:this.props.match.params.api});
			this.getAPIResult();
		}
		
	}
	componentDidMount(){
		
		this.getAPIResult();
		
	}
	getAPIResult(){
		
		axios.get('https://www.googleapis.com/books/v1/volumes?q='+this.state.search+'+intitle')
		.then(res=>{
			
			console.log(res)
			this.setState({loading:false,title:res.data.items[0].volumeInfo.title,
					author:res.data.items[0].volumeInfo.authors,
					Published:res.data.items[0].volumeInfo.publishedDate,
							thumbnail:res.data.items[0].volumeInfo.imageLinks.thumbnail		
			
			})
		})
	}
	render(){
		
				
				const APIResult=(
				<div className={css.Display}>
				<div classname={css.APIimage}><img classname={css.APIimg} src={this.state.thumbnail}/></div>
				
				<div>Title : {this.state.title}</div>
				<div>Author : {this.state.author}</div>
				<div>Published Date : {this.state.Published}</div>
				
				</div>)
			
		return(
			<div>
				{APIResult}
			</div>
		)
	}
	
}
export default APIResult