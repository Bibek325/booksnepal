import React,{Component} from 'react'
import Contents from '../../../Contents/Contents'
import css from './Guides.css'
import Recommendation from '../../../../components/ContentCard/Recommendation/Recommendation'
import Advertisement from '../../../../components/Advertisement/Advertisement'
import axios from 'axios'
import ErrorHandler from '../../../../hoc/ErrorHandler/ErrorHandler'
import Spinner from '../../../../components/UI/Spinner/Spinner'
class NewBooks extends Component{
	state={
		books:[],
		RecommendationBooks:[],
		loading:false
	}

	componentWillMount(){
<<<<<<< HEAD
		axios.get('https://bookstore-12c74.firebaseio.com/NewBooks.json')
=======
		axios.get('https://bookstore-12c74.firebaseio.com/Guides.json')
>>>>>>> b2575cda3de87f6b9cc49ad88b48a5693dda665b
		.then(res=>{
			const fetchBooks=[];
			for(let key in res.data){
				fetchBooks.push({...res.data[key]})
			}
			this.setState({books:fetchBooks,loading:true})
		})
		.catch(error=>{})
		axios.get('https://bookstore-12c74.firebaseio.com/NewBooks.json')
		.then(res=>{
			const fetchBooks=[];
			for(let key in res.data){
				fetchBooks.push({...res.data[key]})
			}
			this.setState({RecommendationBooks:fetchBooks})
		})
	}

	render(){
		let content=<Spinner/>
		if(this.state.loading){
			content=(
					<div>
<<<<<<< HEAD
					<Contents books={this.state.books} category='New-Books'/>
=======
					<Contents books={this.state.books} category='Guides'/>
>>>>>>> b2575cda3de87f6b9cc49ad88b48a5693dda665b
					<Advertisement/>
					<Recommendation books={this.state.RecommendationBooks}/>
					</div>)
		}
		return(
			<div className={css.NewBooks}>
				{content}	

			</div>
			);
	}
}
export default ErrorHandler(NewBooks,axios)