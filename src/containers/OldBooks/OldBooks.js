import React,{Component} from 'react'
import axios from 'axios'
import Input from './Input/Input'
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner'
import Contents from '../Contents/Contents'
import { connect } from 'react-redux'
import css from './OldBooks.css'
class OldBooks extends Component{
	state={
		books:[],
		loading:false
	}	

	componentWillMount(){
		axios.get('https://bookstore-12c74.firebaseio.com/BooksData.json')
		.then(res=>{
			const fetchBooks=[];
			for(let key in res.data){
				fetchBooks.push({...res.data[key]})
			}
			this.setState({books:fetchBooks,loading:true})
		})
	}

	
	render(){
		let content=<Spinner/>
		if(this.state.loading){
			content=<Contents books={this.state.books} category='Old-Books'/>
		}
		let show=null
		if(this.props.isAuth){
			show=<Input/>
		}
		return(
			<div className={css.OldBooks}>
				{show}
				{content}
				}
			</div>
			);
	}
}
const mapStateToProps=(state)=>{
	return{
		isAuth:state.isAuth
	}
}
export default connect(mapStateToProps)(ErrorHandler(OldBooks,axios))