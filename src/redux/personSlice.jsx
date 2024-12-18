import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  person: [{ name: '' }]
}
const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addEmployee(state, action) {
      state.person.push(action.payload)
    }
  }
})
export const { addEmployee } = personSlice.actions
export default personSlice.reducer
