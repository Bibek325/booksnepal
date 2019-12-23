import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import css from './CsitSixth.css'
class CsitSixth extends Component{
	state={
		subjects:[{name:'Compiler Design',Branch1:{label:'Syllabus',value:'/ebooks/CSITSixth/Compiler-Syllabus'},Branch3:{label:'old Question',value:"/ebooks/CSITSixth/Compiler-OldQuestion"},Branch2:{label:'Notes',value:'/ebooks/CSITSixth/Compiler-Notes'}},
			{name:'Real Time System',Branch1:{label:'Syllabus',value:'/ebooks/CSITSixth/RTS-Syllabus'},Branch3:{label:'old Question',value:'/ebooks/CSITSixth/RTS-oldQuestion'},Branch2:{label:'Notes',value:'/ebooks/CSITSixth/RTS-Notes'}},
			{name:'Net Centric Computing',Branch1:{label:'Syllabus',value:'/ebooks/CSITSixth/NCC-Syllabus'},Branch3:{label:'old Question',value:'/ebooks/CSITSixth/NCC-oldQuestion'},Branch2:{label:'Notes',value:'/ebooks/CSITSixth/NCC-Notes'}},
			{name:'Software Engineering',Branch1:{label:'Syllabus',value:'/ebooks/CSITSixth/SoftwareEngineering-Syllabus'},Branch3:{label:'old Question',value:'/ebooks/CSITSixth/SoftwareEngineering-oldQuestion'},Branch2:{label:'Notes',value:'/ebooks/CSITSixth/SE-Notes'}},
			{name:'Web Technologies',Branch1:{label:'Syllabus',value:'/ebooks/CSITSixth/WebTechnology-Syllabus'},Branch3:{label:'old Question',value:'/ebooks/CSITSixth/WebTechnology-oldQuestion'},Branch2:{label:'Notes',value:'/ebooks/CSITSixth/WebTechnology-Notes'}},
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