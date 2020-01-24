import React,{Component} from 'react'
import css from './Survey.css'
import {Link}	from 'react-router-dom'
import axios from 'axios'

class Survey extends Component{

	state={
		count:'CSIT'
	}
	surveyHandler=()=>{
		

		
		
		const Count={
			count:this.state.count,
			
		}
		axios.post('https://bookstore-12c74.firebaseio.com/Survey.json',Count)
		.then(res=>{
		
				
							
		
			
		})
		.catch(error=>{
			this.setState({
				
				
			});
		})

	}

	render(){
		return (
			<div className={css.Survey}>
				<div className={css.SurveyDiv}>
					ARE YOU CSIT STUDENT ??
				</div>
				<Link className={css.Link} to='/ebooks/CSITSixth'>
					<div onClick={this.surveyHandler} className={css.button1}>
						YES
					</div>
				</Link>
				<Link className={css.Link} to='/'>
					<div className={css.button2}>
						NO
					</div>
				</Link>
				</div>
		)
	}
}
export default Survey