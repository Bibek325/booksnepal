import React,{Component} from 'react'
import Aux from '../Auxo/Auxo'
import Modal from '../../components/UI/Modal/Modal'

const ErrorHandler = (WrappedComponent,axios) =>{
	return class extends Component{
		state={
			error:null
		}
		UNSAFE_componentWillMount(){
			
			axios.interceptors.request.use(req=>{
				this.setState({error:null});
				return req
			});
			axios.interceptors.response.use(res=>res,error=>{
				this.setState({error:error});
				console.log(error)
			});
		}
		errorConfirmedHandler=()=>{
			this.setState({error:null})
		}
		render(){
			return(
				<Aux>
					<Modal Error show={this.state.error} backDropHandler={this.errorConfirmedHandler}>
							{this.state.error ? this.state.error.message : null}
					</Modal>
					<WrappedComponent {...this.props}/>

				</Aux>


				)
		}
	}
}
export default ErrorHandler