import React,{Component} from 'react'
import css from './Search.css'
import axios from 'axios'
import Spinner from '../../components/UI/Spinner/Spinner'
import ContentCard from '../../components/ContentCard/ContentCard'
class Search extends Component{
	state={
		Biology:'',
		author:[],
		books:[],
		searchWord:'',
		result:{},
		available:false,
		loading:true
		
	}
	componentDidMount(){
		
		this.getNewBooks();
		this.getOldBooks();
	
	}
	componentDidUpdate(prevProps){
		if(this.props.location !== prevProps.location){
			this.setState({loading:true,available:false,books:'',author:''})
			this.getNewBooks();
		this.getOldBooks();
		}
	}
	// getMovies(){
	// 		axios.get('https://bookstore-12c74.firebaseio.com/NewBooks/Biology.json')
	// 		.then(res=>{
	// 			this.setState({
	// 				Biology:res.data
	// 			})
	// 		})
	// 		axios.get('https://bookstore-12c74.firebaseio.com/NewBooks/AdvancedPhysics.json')
	// 		.then(res=>{
				
	// 		})	
	// }
	getNewBooks(){
		axios.get('https://bookstore-12c74.firebaseio.com/NewBooks.json')
		.then(res=>{
			const fetchBooks=[];
			for(let key in res.data){
				fetchBooks.push({...res.data[key]})
			}

			this.setState({books:fetchBooks,loading:false});

			const search=this.props.match.params.search;
				{this.state.books.map(book=>{
						if(search===book.author || search===book.title){
							
							this.setState({result:book,available:true,})
					
					}

				})}
		})}
		getOldBooks(){
		axios.get('https://bookstore-12c74.firebaseio.com/OldBooks.json')
		.then(res=>{
			const fetchBooks=[];
			for(let key in res.data){
				fetchBooks.push({...res.data[key]})
			}

			this.setState({books:fetchBooks,loading:false});

			const search=this.props.match.params.search;
				{this.state.books.map(book=>{
						if(search===book.author || search===book.title){
							
							this.setState({result:book,available:true,})
					
					}

				})}
		})}
	render(){	


				const val=(
					<div>
					<div className={css.Sorry}>"Sorry , we couldn't find any matches for {this.props.match.params.search}</div>
					<div><img className={css.Searchimage} src='https://image.flaticon.com/icons/svg/202/202381.svg'/> </div>
					</div>)
				let showResult =val
				if(this.state.available){
					showResult=<ContentCard bookinfo={this.state.result}/>
				}
	

				return(
				<div className={css.Search}>

						{this.state.available? "Showing Results for "+this.props.match.params.search : null}
						{this.state.loading?<Spinner/>:showResult}
					
						
				</div>
			)
	}
}
export default Search