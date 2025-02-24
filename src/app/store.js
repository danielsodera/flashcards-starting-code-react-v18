import { configureStore } from "@reduxjs/toolkit";
import topicReducer from '../features/topics/topicsSlice'; 
import quizzesReducer from '../features/quizzes/quizzesSlice';


export default configureStore({
  reducer: {
    topics: topicReducer,
    quizzes: quizzesReducer
  }
});
