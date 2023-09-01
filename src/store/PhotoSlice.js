// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
//   const response = await fetch('https://api.pexels.com/v1/curated?page=2&per_page=40', {
//     headers: {
//       Authorization: 'z7WLXSZGpoTzrzcOctxFmJVdTHxdG8dbpO98Oz5XIdwAPFykjDADHNl0', 
//     },
//   });

//   const data = await response.json();
//   return data.photos;
// });

// export const toggleLike = createAsyncThunk('photos/toggleLike', async (photoId, thunkAPI) => {
//   return photoId;
// });


// const photoSlice = createSlice({
//     name: 'photos',
//     initialState: {
//       photos: [],
//       loading: false,
//       error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//       builder
//         .addCase(fetchPhotos.pending, (state) => {
//           state.loading = true;
//           state.error = null;
//         })
//         .addCase(fetchPhotos.fulfilled, (state, action) => {
//           state.loading = false;
//           state.photos = action.payload;
//         })
//         .addCase(fetchPhotos.rejected, (state, action) => {
//           state.loading = false;
//           state.error = action.error.message;
//         })
//         .addCase(toggleLike.fulfilled, (state, action) => {
//           const toggledPhotoId = action.payload;
//           const photoToUpdate = state.photos.find(photo => photo.id === toggledPhotoId);
//           if (photoToUpdate) {
//             photoToUpdate.liked = !photoToUpdate.liked;
//           }
//         })
//     },
//   });
  
//   export default photoSlice.reducer;