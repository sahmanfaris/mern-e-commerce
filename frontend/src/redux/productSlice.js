import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getProductListAsync = createAsyncThunk(
  'products/getProductListAsync',
  async (obj, { rejectWithValue, fulfillWithValue, dispatch, getState }) => {
    const response = await fetch('/api/products')
    const products = await response.json()
    if (!response.ok) {
      return rejectWithValue(products.message)
    }
    return fulfillWithValue(products)
  }
)

const initialState = {
  products: [],
  loading: false,
  error: null,
}

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  //   reducers: {
  //     getProductListRequest(state) {
  //       state.loading = true
  //     },
  //     getProductListSuccess(state, action) {
  //       state.loading = true
  //       state.products = action.payload
  //     },
  //     getProductListFailure(state, action) {
  //       state.loading = false
  //       state.error = action.payload
  //     },
  //   },
  reducers: {},
  extraReducers: {
    [getProductListAsync.pending]: state => {
      state.loading = true
    },
    [getProductListAsync.fulfilled]: (state, action) => {
      state.products = action.payload
      state.loading = false
    },
    [getProductListAsync.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } =
  productListSlice.actions

export default productListSlice.reducer
