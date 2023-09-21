import { mainApi } from '@/pages/api/hello'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

const initialState = {
  list: [],
  pagination: null,
  selectedItem: null,
  shoppingCart: [],
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
      const newItem = action.payload
      const itemAlreadyExists = state.shoppingCart.some(item => item.mal_id === newItem.mal_id)

      if (!itemAlreadyExists) {
        state.shoppingCart.push(newItem)
      }
    },
    deleteFromCart: (state, action) => {
      state.shoppingCart = state.shoppingCart.filter(el => el.mal_id !== action.payload)
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
        state.selectedItem = action.payload.data
      })
  },
})

export const { addToCart, deleteFromCart } = animeSlice.actions
export default animeSlice.reducer
