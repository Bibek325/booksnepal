import React,{Component} from 'react'
import Description from './Description/Description'
import css from './ContentDescription.css'
const ContentDescription=(props)=>{
			return(
			<div className={css.ContentDescription}>
				<div className={css.Left}>
					<img className={css.Image} src={props.bookinfo.image}/>
				</div>
				<div className={css.Right}>
					<Description clicked={props.clicked} bookinfo={props.bookinfo}/>
				</div>
			</div>
			);
	}

export default ContentDescription