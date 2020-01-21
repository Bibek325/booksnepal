import React from 'react'
import {Link} from 'react-router-dom'
import css from './Left.css'
const Left=()=>{
	return(
		<div className={css.Left}>
			<div className={css.Header}>Compiler Syllabus</div>
			<Link className={css.Link} to='/ebooks/CSITSixth/Compiler-Syllabus/2065'><div className={css.Body}>Syllabus</div></Link>
		
			
			
		</div>
		)
}
export default Left