import React from 'react'
import {Link} from 'react-router-dom'
import css from './Left.css'
const Left=()=>{
	return(
		<div className={css.Left}>
			<div className={css.Header}>Compiler Notes</div>
			<Link className={css.Link} to='/ebooks/CSITSixth/Compiler-Notes/2067'><div className={css.Body}>Old Question Solutions</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/Compiler-Notes/2065'><div className={css.Body}>Handwritten Note of Sanjay Rai</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/Compiler-Notes/201'><div className={css.Body}>Introduction</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/Compiler-Notes/202'><div className={css.Body}>lexical analysis</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/Compiler-Notes/203'><div className={css.Body}>Syntax analysis</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/Compiler-Notes/204'><div className={css.Body}>Syntax Directed translation</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/Compiler-Notes/205'><div className={css.Body}>Type checking</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/Compiler-Notes/206'><div className={css.Body}>Run time environment</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/Compiler-Notes/207'><div className={css.Body}>Intermediate code generation</div></Link>
			<Link className={css.Link} to='/ebooks/CSITSixth/Compiler-Notes/208'><div className={css.Body}>Code generation and Optimization</div></Link>
			
			
		</div>
		)
}
export default Left