import { Film } from './Videoteca';
import { RootState } from './../../app/store';
import { createSlice } from "@reduxjs/toolkit";
import { bastardi, django, hateful, iene, killBill1, killBill2, pulpFiction, jackie, hollywood } from './elencoFilmMockup';

export interface VideotecaState {
  elencoFilm: Array<Film>;
  wantedFilms: Array<Film>;
  filmSelezionato: Film;
  isSelected: boolean;
  status: 'idle' | 'loading' | 'failed';
}



const initialState: VideotecaState = {
  elencoFilm: [iene, pulpFiction, jackie, killBill1, killBill2, bastardi, django, hateful, hollywood],
  wantedFilms: [],
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
      console.log("sono in addFilm");
    },
    addFilmFromWanted: (state, action) => {
      state.wantedFilms.push(action.payload);
      console.log("sono in addFilmFromWanted");
    },
    removeFilm: (state, action) => {
      state.elencoFilm = state.elencoFilm.filter(
        (x) => x.titleInput !== action.payload
      );
      console.log("sono in removeFilm");
    },
    removeFilmFromWanted: (state, action) => {
      state.wantedFilms = state.wantedFilms.filter(
        (x) => x.titleInput !== action.payload
      );
      console.log("sono in removeFilmFromWanted");
    },
    scegliFilm: (state, action) => {
      state.filmSelezionato = action.payload;
      state.isSelected = true;
      console.log("sono in scegli film");
    },
    ricerca: (state, action) => {
        state.wantedFilms = state.elencoFilm.filter( x => x.titleInput.includes(action.payload));
        state.isSelected = false;
        console.log(state.wantedFilms);
    }
  },
});

export const { addFilm, addFilmFromWanted, removeFilm, removeFilmFromWanted, scegliFilm, ricerca } = elencoSlice.actions;

export const selectFilm = (state: RootState) => state.film.elencoFilm;

export const detailFilm = (state: RootState) => state.film.filmSelezionato;

export const isSelected = (state: RootState) => state.film.isSelected;

export const wantedFilms = (state: RootState) => state.film.wantedFilms;

export default elencoSlice.reducer;
