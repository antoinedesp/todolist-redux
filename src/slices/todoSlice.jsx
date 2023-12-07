import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: [
            {
                value: 'Aller a la piscine',
                checked: false,
                date: null,
            },
            {
                value: 'Manger une pizza',
                checked: false,
                date: null,
            },
            {
                value: 'Jouer au foot',
                checked: false,
                date: null,
            },
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },
        markTodoAsDone: (state, action) => {
            let item = state.value.find((value) => {
                return value.value === action.payload
            });
            if(item) {
                item.checked = true;
            }
        },
        markToDoAsUndone: (state, action) => {
            let item = state.value.find((value) => {
                return value.value === action.payload;
            });
            if(item) {
                item.checked = false;
            }
        },
        removeTodo: (state, action) => {
            state.value = state.value.filter((value) => {
               return !(value.value === action.payload);
            });
        }
    }
});

export const {
    addTodo,
    markToDoAsUndone,
    markTodoAsDone,
    removeTodo
    } = todoSlice.actions;
export default todoSlice.reducer;