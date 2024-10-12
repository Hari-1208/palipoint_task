import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import APIKit from '../api/apiKit';
import MircoService from '../api/microService';

interface CommonState {
  loading: boolean;
}

// Define types for the data and API response
interface FetchPostsData {
  payload?: Object;
  callBack: (response: any[]) => void; // Callback function to handle the response
}

const initialState: CommonState = {
  loading: false,
};

export const fetchPosts = createAsyncThunk(
  'common/fetchPosts',
  async (data: FetchPostsData) => {
    const BASE_URL = MircoService.baseURL;
    const response = await APIKit().get(`${BASE_URL}`);

    if (response.status == 200) {
      // Invoke the callback with the response data
      data?.callBack(response?.data);
    }
    return response;
  },
);

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default commonSlice.reducer;
