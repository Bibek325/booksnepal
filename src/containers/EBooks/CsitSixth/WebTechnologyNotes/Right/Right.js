import React from 'react'
import css from './Right.css'
import {withRouter} from 'react-router-dom'
const Right=(props)=>{
	const year=props.match.params.year
	let pdf=''
	let display='bibek'
	switch(year){
		case '2065':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FWebTechnology%2FNotes%2FWeb%20Technology%20(1).pdf?alt=media&token=7cf9c200-7b22-452f-a7d0-d4f91992de2d"
			break;
		}
		case '2066':{
			display='this is 2066 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FWebTechnology%2FNotes%2Fweb.pdf?alt=media&token=6c292650-2dcd-4271-8b1e-8e4bcb386df6"
			break;
		}
		case '2067':{
			display='this is 2066 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/Hamro%2FCSC-353%20Web%20Technologies%20solution.pdf?alt=media&token=15a5be7d-6ea8-4ff7-87a3-7bd556e1ba79"
			break;
		}
		

		
		
	}
	console.log(pdf)
	return(
		<div>
		<iframe id={css.Frame} src={pdf}>
			</iframe></div>
		)
}
export default withRouter(Right)