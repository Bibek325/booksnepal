import React from 'react'
import css from './Right.css'
import {withRouter} from 'react-router-dom'
const Right=(props)=>{
	const year=props.match.params.year
	let pdf=''
	let available=true
	let display='bibek'
	switch(year){
		case '2065':{
			display='this is 2065 ho hai'
			pdf=""
			available=false
			break;
		}
		case '2066':{
			display='this is 2066 ho hai'
			pdf=""
			available=false
			break;
		}
		case '2067':{
			display='this is 2067 ho hai'
			pdf=""
			available=false
			break;
		}
		case '2068':{
			display='this is 2068 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FCOMPILER%2FOLD%20QUESTIONS%2FCompiler-2068.pdf?alt=media&token=1913222a-6389-4a22-8a55-3d6fb39fcd19.pdf#toolbar=0"
			break;
		}
		case '2069':{
			display='this is 2069 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FCOMPILER%2FOLD%20QUESTIONS%2FCompiler-2069.pdf?alt=media&token=9f96bf17-338c-4dd5-9b4b-ac12b84468d2.pdf#toolbar=0"
			break;
		}
		case '2070':{
			display='this is 2065 ho hai'
			pdf=""
			available=false
			break;
		}
		case '2071':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FCOMPILER%2FOLD%20QUESTIONS%2FCompiler-2071.pdf?alt=media&token=3d350ea0-5fab-4e13-88c4-da0f90f437b3.pdf#toolbar=0"
			break;
		}
		case '2072':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FCOMPILER%2FOLD%20QUESTIONS%2FCompiler-2072.pdf?alt=media&token=e2ba72b0-848a-4081-9290-d692300c6961.pdf#toolbar=0"
			break;
		}
		case '2073':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FCOMPILER%2FOLD%20QUESTIONS%2FCompiler-2073.pdf?alt=media&token=65a5c528-bc6e-4b94-91e9-560a2d8f6917.pdf#toolbar=0"
			break;
		}
		case '2074':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FCOMPILER%2FOLD%20QUESTIONS%2FOdldQuestion2074.jpg?alt=media&token=411b733b-f92d-46dd-9f43-10f79b924261"
			available=true
			break;
		}
		case '2075':{
			display='this is 2065 ho hai'
			pdf=""
			available=false
			break;
		}
		

		
		
	}
	let dis=<div className={css.NotFound}>"No file found !!! Will Upload Soon"</div>
	if(available){
		dis=<iframe id={css.Frame} src={pdf}>
				</iframe>
	}
	return(
		<div>
			{dis}
		</div>
		)
}
export default withRouter(Right)