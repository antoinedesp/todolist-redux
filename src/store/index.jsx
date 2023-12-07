import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../slices/todoSlice.jsx';

// Creation du store
export default configureStore({
    reducer: {
        todo: todoSlice
    }
});

