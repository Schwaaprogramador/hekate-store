import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const booksSlice = createSlice({
    name:"books",
    initialState:[],
    reducers:{
        setBooks: (state, action) => [...state,  action.payload],
    }
})
export const  {setBooks} = booksSlice.actions;
export default booksSlice.reducer

//ACTIONS-------------
export const allBooks = () => {
	return async function (dispatch) {
		const response = await axios.get("http://localhost:3001/book");
        console.log(response.data)
		dispatch(setBooks(response.data))
	};
};