import React,{Component} from 'react'
import css from './CategoryItems.css'
import Guides from './Guides/Guides'
class CategoryItems extends Component{
	render(){
		
		return(
				<div className={css.CategoryItems}>
					<Guides/>
					
				</div>
			)
	}
}


export default CategoryItems