import React,{ Component} from 'react'
import css from './App.css'
import axios from 'axios'
import Aux from './hoc/Auxo/Auxo'
import Layout from './Layout'
class App extends Component{
	componentDidMount(){
				 axios.delete('https://bookstore-12c74.firebaseio.com/cart.json')
    .then(res=>{
      console.log(res)
    })
	}
 render(){
 	 return(
    		<Aux>
    			  <Layout/>
    			
   			</Aux>
    )
 }
}
export default App  