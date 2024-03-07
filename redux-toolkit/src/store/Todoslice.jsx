import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState = []
export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers: {
        addTodo: (state,action) => {
            state.push(action.payload);
        },
        removeTodo :(state,action)=>{
            state.splice(state.indexOf(action.payload,1))
        },
        clearAllTodo :(state,action)=>{
            return [];
        },
    },
});

export const {addTodo,clearAllTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;