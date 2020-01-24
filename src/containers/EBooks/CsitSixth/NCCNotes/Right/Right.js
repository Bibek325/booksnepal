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
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2Fraivai%2FNet%20Centric%20Computing%20(1).pdf?alt=media&token=0b66ed74-5a88-499e-a8e4-8538bf0a597f"
			break;
		}
		case '2066':{
			display='this is 2066 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FWebTechnology%2FNotes%2Fweb.pdf?alt=media&token=6c292650-2dcd-4271-8b1e-8e4bcb386df6"
			break;
		}
		case '2067':{
			display='this is 2067 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/Hamro%2FCSC-360%20Net%20Centric%20Computing.pdf?alt=media&token=be0f181b-d463-4190-a1d7-1b8ec14bbaa7"
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