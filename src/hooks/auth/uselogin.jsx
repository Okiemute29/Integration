import { useEffect, useState, useRef } from "react";
import AuthService from "../../services/user/auth";
import { useDispatch } from 'react-redux'
import { setUser } from "../../redux/authreducer"
import {Warning, Success, Error} from "../../component/toastify/toastify"
import axios from "axios";

const useLoginUser = () => {
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch()
    const CancelToken = axios.CancelToken;
    const source = useRef();

   
    const loginUser = async (data) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await AuthService.logIn(data, source.current.token );

            if(!res) {
				Warning('An error occured');
            }else{
                setloading(false);
                if(res.status === 200){
                    await dispatch(setUser(res.data.user))
                    localStorage.setItem("user", JSON.stringify(res.data.user));
					Success(res.data.message);
                    return true
                }
            }
            
        } catch (error) {
            setloading(false);
            if (axios.isCancel(error)) {
            } else {
                if(error.response){
					Error(error?.response?.data?.message);
                }else{
					Error(error?.message);
                }
            }
        }
       
    }
    
    useEffect(()=>{
        return () =>{ 
            if (source.current != null) source.current.cancel()
        }
    }, [])

    return {loginUser, loading};
}
 
export default useLoginUser;