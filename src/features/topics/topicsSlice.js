import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {

    },
}

const topicsSlice = createSlice({
    name: "topics",
    initialState, 
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload; 
            state.topics[id] = {id, name, icon, quizIds: []};
            console.log(state.topics)
        }

    }
})

export const selectTopics = (state) => state.topics.topics
export const { addTopic } = topicsSlice.actions
export default topicsSlice.reducer; 