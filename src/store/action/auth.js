import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart =()=>{
	return {
		type:actionTypes.AUTH_START
	}
}

export const authSuccess =(authData)=>{
	return {
		type:actionTypes.AUTH_SUCCESS,
		authData:authData
	}
}

<<<<<<< HEAD
export const authFail =(error)=>{
	return {
		type:actionTypes.AUTH_FAIL,
		error:error
=======
export const authFail =()=>{
	return {
		type:actionTypes.AUTH_FAIL,
		error:true
>>>>>>> b2575cda3de87f6b9cc49ad88b48a5693dda665b
	}
}
export const auth =(email,password)=>{
	return dispatch=>{
		dispatch(authStart());
		const authData = {
			email:email,
			password:password,
			returnSecureToken:true
		}
		axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-DUOKq61W98A1BLcNv7m5gW6x45HtBGk',authData)
		.then(response=>{
			console.log(response)
			dispatch(authSuccess(response.data))
		})
		.catch(err=>{
			console.log(err);
			dispatch(authFail(err))
		})
	}
<<<<<<< HEAD
=======
}
export const authLogin =(email,password)=>{
	return dispatch=>{
		dispatch(authStart());
		const authData = {
			email:email,
			password:password,
			returnSecureToken:true
		}
		axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-DUOKq61W98A1BLcNv7m5gW6x45HtBGk',authData)
		.then(response=>{
			console.log(response)
			dispatch(authSuccess(response.data))
		})
		.catch(err=>{
			console.log(err);
			dispatch(authFail())
		})
	}
>>>>>>> b2575cda3de87f6b9cc49ad88b48a5693dda665b
}