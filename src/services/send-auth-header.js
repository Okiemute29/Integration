import Authservices from "./user/auth";

function authHeader(){
    const token = Authservices.getUser();
    if(token){
        return { "Authorization": token, 'Content-Type': 'application/json'};
    } else {
        return {};
    }
}

 
export default authHeader;