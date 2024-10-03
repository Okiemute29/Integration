import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: '',
    lastName: '',
    password:'',
    email: '',
    user: null,
    passwordToken: null
}
if( JSON.parse(localStorage.getItem("user")) != null){
  initialState.user = JSON.parse(localStorage.getItem("user"));
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
        state.firstName = action.payload
      },
    setLastName: (state, action) => {
        state.lastName = action.payload
      },
    setPassword: (state, action) => {
        state.password = action.payload
      },
      setEmail: (state, action) => {
        state.email = action.payload
      },
      setUser: (state, action) => {
        state.user = action.payload
      },
      setLogOut: (state, action) => {
        state.user = null
      },
      setPasswordToken: (state, action) => {
        state.passwordToken = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { setFirstName, setLastName, setPassword, setEmail, setUser, setPasswordToken, setLogOut } = counterSlice.actions

export default counterSlice.reducer