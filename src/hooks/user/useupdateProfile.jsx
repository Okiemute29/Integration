import { useEffect, useState, useRef } from "react";
import Settingservices from "../../services/setting/admin";
import _route from '../../constants/routes'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import {Warning, Success, Error} from "../../component/toastify/toastify"

const useUpdateProfile = () => {
    const [loading, setloading] = useState(false);
	const user = useSelector((state) => state.auth.user)
    const [data, setData] = useState([])
	const navigate = useNavigate()
    const CancelToken = axios.CancelToken;
    const source = useRef();

   
    const upDateProfile = async (data) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await Settingservices.UpdateSetting( user.token, data, source.current.token );

            if(!res) {
				Warning('An error occured');
            }else{
                setloading(false);
                if(res.status === 200){
					setData(res.data.result)
					Success(res.data.message);
                    return true
                }
                if(res.status === 201){
					setData(res.data.result)
					Success(res.data.message);
                    return true
                }
            }
            
        } catch (error) {
            setloading(false);
            if (axios.isCancel(error)) {
            } else {
                if(error.response){
					if(error?.response?.data?.status === 401){
						if(error?.response?.data?.message === "jwt expired"){
							navigate(_route._login)
						}
					}
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

    return {upDateProfile, data, loading};
}
 
export default useUpdateProfile;