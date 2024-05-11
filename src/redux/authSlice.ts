import { createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { AuthState } from '../types';
import { API_URL } from '../utils/appData';
import { AppDispatch } from './store';

const initialState: AuthState = {
  isAuth: localStorage.getItem('isAuth') === 'true',
  token: localStorage.getItem('token') || '',
  loading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setToken, setLoading, setError, setIsAuth } = authSlice.actions;

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    // Test credentials
    if (email === 'test@rapptrlabs.com' || password === 'Test123') {
      dispatch(
        setToken(
          '6dd4737a8b7ec61313ae5e900420d46815e1d13b2902be71b97a8fbf1f421a3e'
        )
      );
      dispatch(setIsAuth(true));
      localStorage.setItem(
        'token',
        '6dd4737a8b7ec61313ae5e900420d46815e1d13b2902be71b97a8fbf1f421a3e'
      );
      localStorage.setItem('isAuth', 'true');
      dispatch(setLoading(false));
      return;
    }

    // API call
    try {
      const response: AxiosResponse = await axios.post(API_URL, {
        email,
        password,
      });
      dispatch(setToken(response.data.user_token));
      localStorage.setItem('token', response.data.user_token);
      dispatch(setIsAuth(true));
      localStorage.setItem('isAuth', 'true');
      toast.success('Login successful');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError;
        console.log(err.response?.data);
        dispatch(setError('Invalid credentials'));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

export const logout = () => (dispatch: AppDispatch) => {
  dispatch(setToken(''));
  dispatch(setIsAuth(false));
  localStorage.removeItem('isAuth');
  localStorage.removeItem('token');
};

export default authSlice.reducer;
