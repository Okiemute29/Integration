import myApi from "../common/interceptors/apiinterceptor";
import CryptoJS from 'crypto-js'
import { _logInUser } from "../../network/network"
const HashPasswordKey = process.env.REACT_APP_BASE_HASH_KEY

const Authservices = {
	logIn: async (data, source) => {
	  return await myApi.post(_logInUser, data, {
		cancelToken: source.token,
	  }).then(async (res) => {
		return res;
	  });
  
	},	
	getUser: () => {
		const encrptToken = JSON.parse(localStorage.getItem("authorization"));
		var bytes  = CryptoJS.AES.decrypt(encrptToken, HashPasswordKey);
		var token = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
		
		return token
	},



}

export default Authservices