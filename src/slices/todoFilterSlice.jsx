import { createSlice } from '@reduxjs/toolkit';

export const todoFilterSlice = createSlice({
    name: 'todoFilter',
    initialState: {
        value: 'all',
    },
    reducers: {
        setFilter: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const { setFilter } = todoFilterSlice.actions;
export default todoFilterSlice.reducer;