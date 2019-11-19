import React,{Component} from 'react';
import axios from 'axios'
import {Element} from 'react-scroll'
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler'
import Advertisement from '../../components/Advertisement/Advertisement'
import Trendings from '../../components/ContentCard/Trendings/Trendings'
import Recommendation from '../../components/ContentCard/Recommendation/Recommendation'
import Spinner from '../../components/UI/Spinner/Spinner'
import WelcomeContent from '../WelcomeContent/WelcomeContent'
import Contents from '../Contents/Contents'
class Home extends Component{
	state={
			books:[],
			loading:false,
			error:false
		}

	componentWillMount(){
		axios.get('https://bookstore-12c74.firebaseio.com/NewBooks.json')
		.then(res=>{
			const fetchBooks=[];
			for(let key in res.data){
				fetchBooks.push({...res.data[key]})
			}
			this.setState({books:fetchBooks,loading:true})
		})
		.catch(error=>{
			this.setState({error:true})
		})
	}
	render(){
		let content=<Spinner/>
		if(this.state.loading){
			content=(
				<div>
				<Trendings books={this.state.books}/>
				<Contents books={this.state.books} category='Popular Books'/>
				<Advertisement/>
				<Recommendation books={this.state.books}/>
				</div>
				)
		}
		let home = (<div>
			<WelcomeContent/>
			{content}
			</div>)
		return(
			<div><Element name="Home">
				{this.state.error ? "Couldn't Load the contents due to Network Error" : home}	
			</Element>
			</div>
		)
	}
}
export default ErrorHandler(Home,axios)