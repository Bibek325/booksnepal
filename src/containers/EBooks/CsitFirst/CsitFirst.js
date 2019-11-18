import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import css from './CsitFirst.css'
class CsitFirst extends Component{
	state={
		subjects:['Compiler','Rts','Web','Software','NCC'],
		items:['old questions','notes','Written notes','Internal Questions']
	}
	render(){

		return(
			<div className={css.CsitSixth}>
				{this.state.subjects.map(sub=>{
					return(<div className={css.Subject}>
						{sub}
						{this.state.items.map(item=>{
							return(
							<Link className={css.Link} to={'/'+sub+item}>
								<div className={css.Items}>
								{item}
								</div>
							</Link>
								)
						})}



						</div>)
				})}
				
			</div>
			)
	}
}
export default CsitFirst