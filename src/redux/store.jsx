// Import Dependency 
import { configureStore } from "@reduxjs/toolkit";

// Import Components 
import AuthReducer from './authreducer'

export default configureStore({
    
    reducer: {
        auth: AuthReducer,
    }
})
