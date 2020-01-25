import React,{Component} from 'react'
import cart from '../../../assets/cart.png'
import css from './Bottom.css'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
class Bottom extends Component{
	state={
		searchTerm:''
	}

	changeSearchTerm =(e)=>{
    if(e.key=='Enter'){
     this.props.history.replace('/search/'+this.state.searchTerm)
    }else{
    this.setState({
      searchTerm:e.target.value
    })
    }
  }
  	changeSearchTermButton=()=>{
  		this.props.history.replace('/search/'+this.state.searchTerm)
  	}
	render(){
				return(
		<div className={css.Bottom}>
			<div className={css.First}>
			<input className={css.SearchBar} type='text' placeholder='What are you looking for ?' onKeyUp={(e)=>this.changeSearchTerm(e)}/>
			<div className={css.button} onClick={this.changeSearchTermButton}>Search</div></div>
			<Link to='/cart'><div className={css.Second}><img className={css.img} src={cart}/></div></Link>
		</div>

		);
	}
}
export default withRouter(Bottom)