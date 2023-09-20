import { mainApi } from '@/pages/api/hello'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

const initialState = {
  list: [],
  pagination: null,
  selectedItem: null,
  shopCard: [],
}

export const getList = createAsyncThunk('anime/list', async (page, { rejectWithValue }) => {
  try {
    const resp = await mainApi.getList(page)
    return resp.data
  } catch (err) {
    return rejectWithValue(err)
  }
})
export const searchItem = createAsyncThunk('anime/search-item', async (page, { rejectWithValue }) => {
  try {
    const resp = await mainApi.searchItem(page)
    return resp.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const getSelectedItem = createAsyncThunk('anime/selected', async (id, { rejectWithValue }) => {
  try {
    const resp = await mainApi.getSelectedItem(id)
    return resp.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.shopCard.push(action.payload)
    },
    deleteFromCart: (state, action) => {
      state.shopCard = state.shopCard.filter(el => el.id !== action.payload)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getList.fulfilled, (state, action) => {
        const { data, pagination } = action.payload
        state.list = data
        state.pagination = pagination
      })
      .addCase(searchItem.fulfilled, (state, action) => {
        const { data, pagination } = action.payload
        state.list = data
        state.pagination = pagination
      })
      .addCase(getSelectedItem.fulfilled, (state, action) => {
        console.log(action.payload)
        state.selectedItem = action.payload
      })
  },
})

export const { addToCart, deleteFromCart } = animeSlice.actions
export default animeSlice.reducer
