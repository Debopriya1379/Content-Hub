import {createSlice} from '@reduxjs/toolkit'

export const historySlice = createSlice({
    name : "History",
    initialState : { value : [] },
    reducers : {
        setToHistory : (state,action)=>{
            state.value.push(action.payload);
        },
    }
})

export const  {setToHistory} = historySlice.actions;
export default historySlice.reducer;