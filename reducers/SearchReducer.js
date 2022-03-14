import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    loading:false,
    results:[],
    selected:{}
}

const apiurl = 'http://www.omdbapi.com/?&apikey=852e0f12'

export const getMovies = createAsyncThunk(
    'getMovies',
    async(query)=>{
        const {data} = await axios.get(apiurl + '&s=' +query)
          const responce = data.Search
          return responce       
    }
) 

export const movieDetails = createAsyncThunk(
    'movieDetails',
    async(id)=>{
        const {data} = await axios.get(apiurl + '&i=' +id)
        let result = data
        return result
    }
)

const SearchReducer = createSlice({

    name:"search",
    initialState,
    reducers:{},
    extraReducers:{

        [getMovies.pending]:(state,action)=>{
            state.loading = true
        },
        [getMovies.fulfilled]:(state,action)=>{
            state.loading = false
            state.results = action.payload
        },
        [getMovies.rejected]:(state,action)=>{
            state.loading = false
            state.error = "try again"
        },
         [movieDetails.pending]:(state,action)=>{
            state.loading = true
        },
        [movieDetails.fulfilled]:(state,action)=>{
            state.loading = false
            state.selected = action.payload
        },
        [movieDetails.rejected]:(state,action)=>{
            state.loading = false
            state.error = "try again"
        },
    }

})

export default SearchReducer.reducer