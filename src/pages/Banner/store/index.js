import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBannerInfoAction = createAsyncThunk(
  "banner/fetchBannerInfoAction",
  async (extraInfo, store) => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve("BANNER INFO FROM MOCK SERVER!!!");
      }, 2000);
    });
  }
);

export const fetchRecommendAction = createAsyncThunk('banner/fetchRecommendAction',async(extraInfo,{dispatch})=>{
    const recommend = await new Promise(resolve=>{
        setTimeout(() => {
            resolve('RECOMMENT INFO FROM MOCK SERVER!')
        }, 3000);
    })
    dispatch(bannerSlice.actions.setRecommendInfo(recommend))
})

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    bannerInfo: "",
    recommend: "",
  },
  reducers: {
    setBannerInfo: (state, { payload }) => {
      // immutablejs 保证每次都返回新的state
      state.bannerInfo = payload;
    },
    setRecommendInfo: (state, { payload }) => {
      // immutablejs 保证每次都返回新的state
      state.recommend = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBannerInfoAction.fulfilled, (state, { payload }) => {
      state.bannerInfo = payload;
    });
  },
});

export const { setBannerInfo: setBannerInfoAction } = bannerSlice.actions;

export default bannerSlice.reducer;
