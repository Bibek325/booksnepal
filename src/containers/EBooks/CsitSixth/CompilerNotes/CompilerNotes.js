import React,{Component} from 'react'
import Left from './Left/Left'
import {Link} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import Right from './Right/Right'
import css from './CompilerNotes.css'
class CompilerNotes extends Component{
	render(){
		return(
		<div className={css.Old}>
			<div className={css.Left}>
				
					<Left/>
			</div>
			<div className={css.Right}>
			<Switch>
			<Route path='/ebooks/CSITSixth/Compiler-Notes/:year' component={Right}/>
			
			</Switch>
			</div>
		</div>
		)
	}
}
export default CompilerNotes