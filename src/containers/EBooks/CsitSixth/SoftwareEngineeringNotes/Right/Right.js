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
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2Fraivai%2FS.E%20note_sanjay_sir.pdf?alt=media&token=3a842a39-a7e5-474d-acd9-ab2a8bb54723"
			break;
		}
		case '2066':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/Hamro%2FSoftware%20Engineering%20Solution.pdf?alt=media&token=6f635c4b-9e7e-495b-a8a8-c83117587385"
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