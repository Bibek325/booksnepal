import React from 'react'
import {Link} from 'react-router-dom'
import css from './Left.css'
const Left=()=>{
	return(
		<div className={css.Left}>
			<div className={css.Header}>Compiler Old Questions</div>
			
			<Link className={css.Link} to='/ebooks/CSITSixth/compiler-OldQuestion/2068'><div className={css.Body}>Old Questions 2068</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/compiler-OldQuestion/2069'><div className={css.Body}>Old Questions 2069</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/compiler-OldQuestion/2070'><div className={css.Body}>Old Questions 2070</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/compiler-OldQuestion/2071'><div className={css.Body}>Old Questions 2071</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/compiler-OldQuestion/2072'><div className={css.Body}>Old Questions 2072</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/compiler-OldQuestion/2073'><div className={css.Body}>Old Questions 2073</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/compiler-OldQuestion/2074'><div className={css.Body}>Old Questions 2074</div></Link>
		</div>
		)
}
export default Left