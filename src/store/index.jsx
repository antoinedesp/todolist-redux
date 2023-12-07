import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../slices/todoSlice.jsx';
import todoFilterSlice from "../slices/todoFilterSlice.jsx";

// Creation du store
export default configureStore({
    reducer: {
        todo: todoSlice,
        todoFilter: todoFilterSlice,
    }
});

