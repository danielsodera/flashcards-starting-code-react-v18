import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: {}
}

const quizzesSlice = createSlice({
    name: 'quizzes', 
    initialState, 
    reducers: {
        addQuiz: (state, {id, name, topicId, cardIds}) => {

        }
    }
})


export const selectQuizzes = (state) => state.quizzes; 
export const { addQuiz } = quizzesSlice.actions; 
export default quizzesSlice.reducer; 