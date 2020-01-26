import React,{Component} from 'react'
import FeedBackShow from './FeedBackShow/FeedBackShow'
import axios from 'axios'
import css from './FeedBackDisplay.css'
class FeedBackDisplay extends Component{
	state={
		feedback:[],
		loading:true
	}
	componentWillMount(){
		axios.get('https://bookstore-12c74.firebaseio.com/FeedBack.json')
		.then(res=>{
			const fetchFeedback=[];
			for(let key in res.data){
				fetchFeedback.push({
					...res.data[key],
					id:key
				})

			}
			this.setState({feedback:fetchFeedback});
			
		})
			
	}
	render(){
		console.log(this.state.feedback)
		return(
		<div className={css.FeedBack}>
			<div className={css.Text}>Feedback</div>
		<div className={css.FeedBackDisplay}>	{this.state.feedback.map(feedback=>(
			
					<FeedBackShow item={feedback}/>
					
			))}
		</div>
		</div>
		)
	}
}
export default FeedBackDisplay