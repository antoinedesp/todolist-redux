import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: [
            {
                value: 'Aller a la piscine',
                checked: false,
            },
            {
                value: 'Manger une pizza',
                checked: false,
            },
            {
                value: 'Jouer au foot',
                checked: false,
            },
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },
        markTodoAsDone: (state, action) => {
            console.log(action.payload);
            let item = state.value.find((value) => {
                return value.value === action.payload
            });
            if(item) {
                item.checked = true;
            }
        },
        markToDoAsUndone: (state, action) => {
            let item = state.value.find((value, position) => {
                return value.value === action.payload;
            });
            if(item) {
                item.checked = false;
            }
        }
    }

});

export const { addTodo, markToDoAsUndone, markTodoAsDone } = todoSlice.actions;
export default todoSlice.reducer;