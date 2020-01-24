import React,{ Component} from 'react'
import css from './App.css'
import Aux from './hoc/Auxo/Auxo'
import Layout from './Layout'
class App extends Component{
	
 render(){
 	 return(
    		<Aux>
    			  <Layout/>
    			
   			</Aux>
    )
 }
}
export default App  