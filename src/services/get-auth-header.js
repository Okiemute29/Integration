import CryptoJS from 'crypto-js'
const HashPasswordKey = process.env.REACT_APP_BASE_HASH_KEY

function getAuthHeader(authorization){
    
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(authorization), HashPasswordKey).toString();
    // set user to local storage
     localStorage.setItem("authorization", JSON.stringify(ciphertext));
}

 
export default getAuthHeader;