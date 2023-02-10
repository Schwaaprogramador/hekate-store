import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id: '1',
        title: 'Task 1',
        description: 'Task 1 description',
    },
    {
        id: '2',
        title: 'Task 2',
        description: 'Task 2 description',
    }
]
// const stateGlobal = useSelector(state => state.tasks)

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action)=>{
            
        }
    }
})

export default taskSlice.reducer;