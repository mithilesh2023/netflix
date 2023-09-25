import {configureStore,createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { MY_API_KEY,TMDB_BASE_URL } from '../utils/constant'
import axios from 'axios'
const initialState={
    movies:[],
    generesLoaded:false, 
    genres:[]
}
export const getGeres=createAsyncThunk('netflix/generes',async()=>{
    const {data:{genres}} =await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`)
    console.log(genres)
    return genres
})

const NetflixSlice=createSlice({
    name:"Netflix",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getGeres.fulfilled,(state,action)=>{
            state.generes=action.payload;
            state.generesLoaded=true;
        })
    }
})

export const store=configureStore({
    reducer:{
        netflix:NetflixSlice.reducer
    }
})