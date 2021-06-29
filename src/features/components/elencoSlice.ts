import { Film } from './Form';
import { RootState } from './../../app/store';
import { createSlice } from "@reduxjs/toolkit";

export interface VideotecaState {
  elencoFilm: Array<Film>;
  filmSelezionato: Film;
  isSelected: boolean;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: VideotecaState = {
  elencoFilm: [],
  filmSelezionato: {
    id: 0,
    titleInput: "",
    subTitleInput: "",
    annoUscita: "",
  },
  isSelected: false,
  status: "idle",
};

export const elencoSlice = createSlice({
  name: "film",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addFilm: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.elencoFilm.push(action.payload);
    },
    removeFilm: (state, action) => {
      state.elencoFilm = state.elencoFilm.filter(
        (x) => x.titleInput !== action.payload
      );
    },
    scegliFilm: (state, action) => {
      state.filmSelezionato = action.payload;
      state.isSelected = true;
    },
  },
});

export const { addFilm, removeFilm, scegliFilm } = elencoSlice.actions;

export const selectFilm = (state: RootState) => state.film.elencoFilm;

export const detailFilm = (state: RootState) => state.film.filmSelezionato;

export const isSelected = (state: RootState) => state.film.isSelected;

export default elencoSlice.reducer;
