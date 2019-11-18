import React,{Component} from 'react'
import Contents from '../Contents/Contents'
import css from './EBooks.css'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from 'axios'
import {Link} from 'react-router-dom'
class EBooks extends Component{
	state={
			books:[],
			loading:false,
			category:['CSIT','BIM','BHM'],
			semester:['First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eighth']
			}

	

	render(){
		
		return(
			<div className={css.EBooks}>
				{this.state.category.map((item,key)=>(
					<div className={css.Category}>
						<strong>{item}</strong>
							{this.state.semester.map((items,key)=>(
								<Link to={'/e-books/'+item+items} className={css.Link}><div className={css.CategoryItems}>{items} Semester</div></Link>
								))}
					</div>
					))}
			</div>
			);
	}
}
export default EBooks