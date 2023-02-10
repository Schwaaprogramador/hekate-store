import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './reducers/tasks/taskSlice'

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
})

