import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // localStorage.removeItem('list')
    list: localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action)=> {
        var arr = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
        console.log(arr, "arr")
        state.list.push({'title': action.payload, 'complited': false})
        arr.push({'title': action.payload, 'complited': false})
        localStorage.setItem('list', JSON.stringify(arr))
        
      
    },
    delete: (state, action) => {

    },
    otsoCity: (state, action) => {
        const id = action.payload
        var arr = JSON.parse(localStorage.getItem('list'))
        if(arr[id].complited == true){
            arr[id].complited = false;
        }else{
            arr[id].complited = true
        }
        state.list = arr;
        localStorage.setItem('list', JSON.stringify(arr))
        console.log(arr[id], 'current-arr')
        console.log(arr, 'arr')
    },
  },
})

export const { add, otsoCity } = todoSlice.actions

export default todoSlice.reducer