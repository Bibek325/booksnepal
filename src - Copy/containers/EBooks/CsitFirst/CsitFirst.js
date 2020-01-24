import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import css from './CsitFirst.css'
class CsitFirst extends Component{
	state={
		subjects:[{name:'IIT (CSC 109)',Branch1:{label:'old Question',value:"/ebooks/CsitFirst/IIT-OldQuestion"},Branch2:{label:'Past Question',value:'www.fb.com'}},
			{name:'Programming (CSC 110)',Branch1:{label:'old Question',value:'/ebooks/CSITSixth/RTS-oldQuestions'},Branch2:{label:'Past Question',value:'www.fb.com'}},
			{name:'Digital Logic(CSC 111)',Branch1:{label:'old Question',value:'/ebooks/CSITSixth/NCC-oldQuestions'},Branch2:{label:'Past Question',value:'www.fb.com'}},
			{name:'Mathematics I (MTH 112)',Branch1:{label:'old Question',value:'/ebooks/CSITSixth/SE-oldQuestions'},Branch2:{label:'Past Question',value:'www.fb.com'}},
			{name:'Physics (PHY 113)',Branch1:{label:'old Question',value:'/ebooks/CSITSixth/WT-oldQuestions'},Branch2:{label:'Past Question',value:'www.fb.com'}},
		]
	}
	render(){

		return(
			<div className={css.CsitSixth}>
				{this.state.subjects.map(item=>{

					return(
						<div>
						<div className={css.Subject}><strong>{item.name}</strong>
								<Link className={css.Link} 
								to={item.Branch1.value}>
									<div className={css.Items}>
										{item.Branch1.label}
									</div>
								</Link>
								<a className={css.Link} 
								href={item.Branch1.value}
								 target='_blank'>
								<div className={css.Items}>
								{item.Branch2.label}
								</div>
								</a>
								</div>
						</div>
						)
			})}				
				
			</div>
			);
	}
}
export default CsitFirst