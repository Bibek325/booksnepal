import React from 'react'
import {Link} from 'react-router-dom'
import css from './Left.css'
const Left=()=>{
	return(
		<div className={css.Left}>
			<div className={css.Header}>SoftwareEngineering Notes</div>
			<Link className={css.Link} to='/ebooks/CSITSixth/SE-Notes/2065'><div className={css.Body}>HandWritten Notes of Sanjay Rai</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/SE-Notes/2066'><div className={css.Body}>Old Questions Solutions</div></Link>
			
			
		</div>
		)
}
export default Left