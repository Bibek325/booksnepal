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
			display='this is 2067 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FCOMPILER%2FOLD%20QUESTIONS%2FCompiler-2068.pdf?alt=media&token=1913222a-6389-4a22-8a55-3d6fb39fcd19.pdf#toolbar=0"
			break;
		}
		case '20681':{
			display='this is 2068 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FWebTechnology%2FOldQuestion%2FWebTechnology-OldQuestion-2068(I).jpg?alt=media&token=116b4a37-7401-41e7-89f3-72fb2fc413ec"
			break;
		}
		case '20682':{
			display='this is 2068 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FWebTechnology%2FOldQuestion%2FWebTechnology-OldQuestion-2068(II).jpg?alt=media&token=cce290fe-5ff3-4db2-87b0-c564f2661371"
			break;
		}
		case '2069':{
			display='this is 2069 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FWebTechnology%2FOldQuestion%2FWebTechnology-OldQuestion-2069.jpg?alt=media&token=730d0a5f-1b3f-4a68-9aa3-b9f8e55b69d4"
			break;
		}
		case '2070':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FCOMPILER%2FOLD%20QUESTIONS%2FCompiler-2068.pdf?alt=media&token=1913222a-6389-4a22-8a55-3d6fb39fcd19.pdf#toolbar=0"
			break;
		}
		case '20711':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FWebTechnology%2FOldQuestion%2FWebTechnology-OldQuestion-2071(I).jpg?alt=media&token=b9d3309d-0122-487c-90e1-2ab74e2430bc"
			break;
		}
		case '20712':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FWebTechnology%2FOldQuestion%2FWebTechnology-OldQuestion-2071(II).jpg?alt=media&token=669804c5-c85e-4a4b-af4b-7a80b8b562bc"
			break;
		}
		case '2072':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FWebTechnology%2FOldQuestion%2FWebTechnology-OldQuestion-2072.jpg?alt=media&token=565762f0-f549-4e98-97a5-57b53182c233"
			break;
		}
		case '2073':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FCOMPILER%2FOLD%20QUESTIONS%2FCompiler-2073.pdf?alt=media&token=65a5c528-bc6e-4b94-91e9-560a2d8f6917.pdf#toolbar=0"
			break;
		}
		case '2074':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FCOMPILER%2FOLD%20QUESTIONS%2FCompiler-2068.pdf?alt=media&token=1913222a-6389-4a22-8a55-3d6fb39fcd19.pdf#toolbar=0"
			break;
		}
		case '2075':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FCOMPILER%2FOLD%20QUESTIONS%2FCompiler-2068.pdf?alt=media&token=1913222a-6389-4a22-8a55-3d6fb39fcd19.pdf#toolbar=0"
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