import React,{Component} from 'react'
import NewBooks from '../NewBooks/NewBooks'

import APIResult from './APIResult/APIResult'
import {Route,Switch} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import css from './APISearch.css'
class APISearch extends Component{
	state={
		searchTerm:''
	}
	changeSearchTerm=(e)=>{
		if(e.key=='Enter'){
			this.props.history.replace('/API/' +this.state.searchTerm)
		}
		else{
			this.setState({
				searchTerm:e.target.value
			})
		}

	}
	render(){
		return(
			<div className={css.APISearch}>
				 
				<div className={css.SearchDiv}>
					<input className={css.Search} 
						type='text'
						onKeyUp={(e)=>this.changeSearchTerm(e)}
						placeholder='Search books in Google Api'/>
					<div className={css.Button}>
							Search
					</div>
					</div>
				<div className={css.SearchResult}>
						
						<Switch>  
							 <Route path='/API/:api' component={APIResult}/>

						</Switch>
					</div>
				</div> 

			
			)
	}
}

export default withRouter(APISearch)