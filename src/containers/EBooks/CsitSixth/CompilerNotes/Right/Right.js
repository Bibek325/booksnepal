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
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FCOMPILER%2Fcompiler%20design%20and%20construction%20(2).pdf?alt=media&token=018b5688-09d9-4848-83b2-a9cbc12f2c48"
			break;
		}
		case '2066':{
			display='this is 2066 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FWebTechnology%2FNotes%2Fweb.pdf?alt=media&token=6c292650-2dcd-4271-8b1e-8e4bcb386df6"
			break;
		}
		case '2067':{
			display='this is 2067 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/Hamro%2FCSC-352%20Compiler%20Design%20and%20Construction%20solution.pdf?alt=media&token=e2fdec32-a743-4f91-ab75-58d9f4a8fddf"
			break;
		}
		case '201':{
			display='this is 2068 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/lokesh%2F01%2BIntroduction2943895349733299820.pdf?alt=media&token=7d83a53c-1608-468d-a1cc-46b1348daa19"
			break;
		}
		case '202':{
			display='this is 2068 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/lokesh%2F03%2Blex%2Banalysis6911816216200304165.pdf?alt=media&token=f53b2b37-7b92-41d7-b2ba-6d41e2affc8e"
			break;
		}
		case '203':{
			display='this is 2069 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/lokesh%2F04%2Bsyntax%2Banalysis%2B(1)1469596693548121612.pdf?alt=media&token=a4a62545-c120-4f27-b588-3220ff6708ba"
			break;
		}
		case '204':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/lokesh%2F05%2BSyntax-Directed%2BTranslation708694598263885526.pdf?alt=media&token=53fe881f-0f88-4dd1-9a7b-49f7764f788a"
			break;
		}
		case '205':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/lokesh%2F06%2BType%2BChecking2527653186862126033.pdf?alt=media&token=166c151c-f4c8-4721-8344-b6dc8a9b6383"
			break;
		}
		case '206':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/lokesh%2F07%2BRun%2BTime%2BEnvironments5073943751940289643.pdf?alt=media&token=1779d9bb-124d-4125-a69c-529e470fa5c8"
			break;
		}
		case '207':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/lokesh%2F08%2BIntermediate-Code-Generation147805877423932971.pdf?alt=media&token=009d881b-f276-45ff-8858-4583fe47140d"
			break;
		}
		case '208':{
			display='this is 2065 ho hai'
			pdf="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/lokesh%2F09%2BCode-Generation%2Band%2BOptimization5578828038305644585.pdf?alt=media&token=7bc2bfba-a0e7-4549-bf8e-002a1b6de0ff"
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