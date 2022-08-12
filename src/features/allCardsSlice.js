import {createSlice} from '@reduxjs/toolkit'

export const allCardsSlice = createSlice({
    name : "allCards",
    initialState : { value : { EducationCards : [], EntertainmentCards : [] }},
    reducers : {
        setEducationCards : (state,action)=>{
            state.value.EducationCards = action.payload;
        },
        setEntertainmentCards : (state,action)=>{
            state.value.EntertainmentCards = action.payload;
        },
        deleteEduCard : (state,action)=>{
            state.value.EducationCards = state.value.EducationCards.filter((card) => card.id !== action.payload.id);
        },
        deleteEntCard : (state,action)=>{
            state.value.EntertainmentCards = state.value.EntertainmentCards.filter((card) => card.id !== action.payload.id);
        }
    }
})

export const  {setEducationCards,setEntertainmentCards,deleteEduCard,deleteEntCard} = allCardsSlice.actions;
export default allCardsSlice.reducer;