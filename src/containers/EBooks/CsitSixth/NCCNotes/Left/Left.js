import React from 'react'
import {Link} from 'react-router-dom'
import css from './Left.css'
const Left=()=>{
	return(
		<div className={css.Left}>
			<div className={css.Header}>NCC Notes</div>
			<Link className={css.Link} to='/ebooks/CSITSixth/NCC-Notes/2065'><div className={css.Body}>Handwritten Note of Sanjay Rai</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/NCC-Notes/2066'><div className={css.Body}>Handwritten Note of Rijen Manandhar</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/NCC-Notes/2067'><div className={css.Body}>Old Question Solutions</div></Link>
			
			
		</div>
		)
}
export default Left