import React from 'react'
import RecommendationCard from './RecommendationCard/RecommendationCard'
import css from './Recommendation.css'
const Recommendation = (props) => {
	return(
		<div>
		<h2 className={css.Heading}>Recommendation : </h2>
		<div className={css.Trendings}>

		{props.books.map((books,key)=>(
				<RecommendationCard key={key} bookinfo={books}/>
					))}
					
		</div>

		</div>
		)
}
export default Recommendation