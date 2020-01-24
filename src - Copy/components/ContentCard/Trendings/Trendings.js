import React from 'react'
import {  Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TrendingCard from './TrendingCard/TrendingCard'
import css from './Trendings.css'
const Trendings = (props) => {
	return(
		<div>
		<Element name="Trendings">
		<h2 className={css.Heading}>Trendings : </h2>
		<div className={css.Trendings}>

		{props.books.map((books,key)=>(
				<TrendingCard key={key} bookinfo={books}/>
					))}
					
		</div>
		</Element>
		</div>
		)
}
export default Trendings