import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './reducers/tasks/taskSlice'
import bookSlice from './reducers/books/bookSlice';

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        books: bookSlice,
    },
})

