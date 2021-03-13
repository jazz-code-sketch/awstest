import Axios from 'axios'
import Store from '../../store'
import Router from '../../router'

export class UserInfo{
	async logOutUser(){
		try{
	    await Axios.post(`${window.location.origin}/api/logout`);
	    location.replace(`${window.location.origin}`);
	  }catch{
	  	console.log('error logging out')
	  }	
	}
	async logInUser(email, password){
	  try{
			const data = await Axios.post(`${window.location.origin}/api/login`, {'email': email, 'password': password})	
			return data;
		}catch(error){
			console.log(error)	
		}
	}
	async checkIfValidCookie(){
		try{
			await Axios.get(`${window.location.origin}/api/serverCookie`)
			return true
		}catch{
			return false
		}
	}









	


	


















}