import React,{Component} from 'react'

import ContentCard from '../../components/ContentCard/ContentCard'
import css from './Contents.css'

class Contents extends Component{
	
	

	render(){
		return(
			<div>
			
			
			<div className={css.TopBar}>
				 {this.props.category}
			</div>
			<div className={css.Contents} >
				{this.props.books.map((books,key)=>(
	
					<ContentCard key={key} bookinfo={books}/>
					))}
			</div>
			</div>

			);
	}
}
export default Contents