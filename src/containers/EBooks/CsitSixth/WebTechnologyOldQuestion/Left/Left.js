import React from 'react'
import {Link} from 'react-router-dom'
import css from './Left.css'
const Left=()=>{
	return(
		<div className={css.Left}>
			<div className={css.Header}>Web Technlogy Old Questions</div>
			<Link className={css.Link} to='/ebooks/CSITSixth/WebTechnology-OldQuestion/20681'><div className={css.Body}>Old Questions 2068(I)</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/WebTechnology-OldQuestion/20682'><div className={css.Body}>Old Questions 2068(II)</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/WebTechnology-OldQuestion/2069'><div className={css.Body}>Old Questions 2069</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/WebTechnology-OldQuestion/20711'><div className={css.Body}>Old Questions 2071(I)</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/WebTechnology-OldQuestion/20712'><div className={css.Body}>Old Questions 2071(II)</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/WebTechnology-OldQuestion/2072'><div className={css.Body}>Old Questions 2072</div></Link>

		</div>
		)
}
export default Left