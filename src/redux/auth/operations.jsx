import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';


const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

// const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = '';
// }

export const register = createAsyncThunk(
    'auth/register',
    async (body, thunkAPI) => {
        try {
            const response = await axios.post('users/signup', body);
            setAuthHeader(response.data.token);
            console.log(response.data.token)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.massage);
        }
    }
);


export const login = createAsyncThunk(
    'auth/login', 
    async (body, thunkAPI) => {
        try {
            const response = await axios.post('users/login', body);
            setAuthHeader(response.data.token);
            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.massage);
        }
        
    }

);




export const refreshUser = createAsyncThunk(
    'auth/refresh', 
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;


        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('unable to fetch user')
        }

        try {
            setAuthHeader(persistedToken);
            const response = await axios.get('users/me');
            return response.data;

         } catch (error) {
            return thunkAPI.rejectWithValue(error.massage);
        }
    }
)



