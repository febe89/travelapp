import { configureStore } from '@reduxjs/toolkit'
import personReducer from '../redux/personSlice'
export const store = configureStore({
  reducer: {
    person: personReducer 
  }
})
