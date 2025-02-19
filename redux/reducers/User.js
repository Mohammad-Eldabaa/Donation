import { createSlice, configureStore } from '@reduxjs/toolkit'


const initialState = {
    isLogin: false,
    image:'mmm',
}

export const User = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        LogIn:(state, action) => {
            return{...state,...{isLogin: true},...action.payload}
        },
        resetToInitialUser:()=>{
            return initialState;
        },
        updateToken:(state,action)=>{
            state.token = action.payload
        }
    }
})


export const {LogIn,resetToInitialUser,updateToken} = User.actions;
export default User.reducer;