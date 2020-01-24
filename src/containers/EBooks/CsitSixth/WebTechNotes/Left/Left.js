import React from 'react'
import {Link} from 'react-router-dom'
import css from './Left.css'
const Left=()=>{
	return(
		<div className={css.Left}>
			<div className={css.Header}>Web Technlogy Notes</div>
			<Link className={css.Link} to='/ebooks/CSITSixth/WebTechnology-Notes/2065'><div className={css.Body}>Handwritten Note of Sanjay Rai</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/WebTechnology-Notes/2066'><div className={css.Body}>Handwritten Note of Rijen Manandhar</div></Link>
			
			
		</div>
		)
}
export default Left