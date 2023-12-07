import { createSlice } from '@reduxjs/toolkit';

const saveToStorage = (toSave) => {
  localStorage.setItem("todos", JSON.stringify(toSave));
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: JSON.parse(localStorage.getItem("todos")) ?? [
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
            saveToStorage(state.value);
        },
        markTodoAsDone: (state, action) => {
            let item = state.value.find((value) => {
                return value.value === action.payload
            });
            if(item) {
                item.checked = true;
            }
            saveToStorage(state.value);
        },
        markToDoAsUndone: (state, action) => {
            let item = state.value.find((value) => {
                return value.value === action.payload;
            });
            if(item) {
                item.checked = false;
            }
            saveToStorage(state.value);
        },
        removeTodo: (state, action) => {
            state.value = state.value.filter((value) => {
               return !(value.value === action.payload);
            });
            saveToStorage(state.value);
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