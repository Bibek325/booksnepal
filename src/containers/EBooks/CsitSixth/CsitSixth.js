import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import css from './CsitSixth.css'
class CsitSixth extends Component{
	state={
		subjects:[{name:'Compiler Design',Branch1:{label:'old Question',value:'https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/2.1%20components-learning-card.pdf.pdf?alt=media&token=45ad9de0-b931-460d-8d52-8bcc668d1dc9'},Branch2:{label:'Past Question',value:'www.fb.com'}},
			{name:'Real Time System',Branch1:{label:'old Question',value:'www.fb.com'},Branch2:{label:'Past Question',value:'www.fb.com'}},
			{name:'Net Centric Computing',Branch1:{label:'old Question',value:'www.fb.com'},Branch2:{label:'Past Question',value:'www.fb.com'}},
			{name:'Software Engineering',Branch1:{label:'old Question',value:'www.fb.com'},Branch2:{label:'Past Question',value:'www.fb.com'}},
			{name:'Web Technologies',Branch1:{label:'old Question',value:'www.fb.com'},Branch2:{label:'Past Question',value:'www.fb.com'}},
		]
	}
	render(){

		return(
			<div className={css.CsitSixth}>
				{this.state.subjects.map(item=>{

					return(
						<div>
						<div className={css.Subject}><strong>{item.name}</strong>
								<a className={css.Link} 
								href={item.Branch1.value}
								 target='_blank'>
									<div className={css.Items}>
										{item.Branch1.label}
									</div>
								</a>
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
export default CsitSixth