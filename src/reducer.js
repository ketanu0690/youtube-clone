import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'search',
  initialState: {
    value: "Recommanded"
  },
  reducers: {
    searching: (state,payload) => {
      return {...state,value:payload}
    }
  }
})
export const {searching} = counterSlice.actions


const reducer = (state = 0, action) => {
  switch (action.type) {
     case 'INCREMENT': return state + 1
     case 'DECREMENT': return state - 1
     case 'RESET' : return 0
    default: return state
  }
}
export default reducer;