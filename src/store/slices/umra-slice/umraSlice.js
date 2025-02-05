import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  languageStore: false,
};

const umraSlice = createSlice({
  name: 'umra',
  initialState,
  reducers: {
    languageTrue(state) {
        state.languageStore = true
    },
    languageFalse(state) {
        state.languageStore = true
    }
  },
});

export const {languageTrue,languageFalse} = umraSlice.actions 

export default umraSlice;