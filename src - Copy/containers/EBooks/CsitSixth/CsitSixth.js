import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import css from './CsitSixth.css'
class CsitSixth extends Component{
	state={
		subjects:[{name:'Compiler Design',Branch1:{label:'Syllabus',value:'/ebooks/CSITSixth/WebTechnology-oldQuestion'},Branch3:{label:'old Question',value:"/ebooks/CSITSixth/compiler-OldQuestion"},Branch2:{label:'Notes',value:'www.fb.com'}},
			{name:'Real Time System',Branch1:{label:'Syllabus',value:'/ebooks/CSITSixth/WebTechnology-oldQuestion'},Branch3:{label:'old Question',value:'/ebooks/CSITSixth/RTS-oldQuestion'},Branch2:{label:'Notes',value:'www.fb.com'}},
			{name:'Net Centric Computing',Branch1:{label:'Syllabus',value:'/ebooks/CSITSixth/WebTechnology-oldQuestion'},Branch3:{label:'old Question',value:'/ebooks/CSITSixth/NCC-oldQuestion'},Branch2:{label:'Notes',value:'www.fb.com'}},
			{name:'Software Engineering',Branch1:{label:'Syllabus',value:'/ebooks/CSITSixth/WebTechnology-oldQuestion'},Branch3:{label:'old Question',value:'/ebooks/CSITSixth/SoftwareEngineering-oldQuestion'},Branch2:{label:'Notes',value:'www.fb.com'}},
			{name:'Web Technologies',Branch1:{label:'Syllabus',value:'/ebooks/CSITSixth/WebTechnology-oldQuestion'},Branch3:{label:'old Question',value:'/ebooks/CSITSixth/WebTechnology-oldQuestion'},Branch2:{label:'Notes',value:'www.fb.com'}},
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
								<Link className={css.Link} 
								to={item.Branch3.value}>
									<div className={css.Items}>
										{item.Branch3.label}
									</div>
								</Link>
								<Link className={css.Link} 
								to={item.Branch2.value}>
									<div className={css.Items}>
										{item.Branch2.label}
									</div>
								</Link>
								</div>
						</div>
						)
			})}				
				
			</div>
			);
	}
}
export default CsitSixth