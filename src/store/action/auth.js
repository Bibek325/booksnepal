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

export const authFail =()=>{
	return {
		type:actionTypes.AUTH_FAIL,
		error:true
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
}