import {createSlice} from '@reduxjs/toolkit'

export const selectedCardSlice = createSlice({
    name : "selecetdCard",
    initialState : { value : {} },
    reducers : {
        setSelectedCard : (state,action)=>{
            state.value = action.payload;
        },
        removeSelectedCard : (state)=>{
            state.value = {};
        }
    }
})

export const  {setSelectedCard,removeSelectedCard} = selectedCardSlice.actions;
export default selectedCardSlice.reducer;