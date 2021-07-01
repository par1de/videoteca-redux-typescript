import React from "react";
import { Form } from "./Form";
import { ElencoPreview } from "./ElencoPreview";
import { Header } from "./Header";
import { DettaglioFilm } from "./DettaglioFilm";
import { detailFilm, selectFilm } from "./elencoSlice";
import { useSelector } from "react-redux";

export interface Iprops {
  movie: Film;
}
export interface IArrayProps {
  movies: Array<Film>;
}

export interface Film {
  id: number;
  titleInput: string;
  subTitleInput: string;
  annoUscita: string;
}

function Videoteca() {
  const films = useSelector(selectFilm);
  const film = useSelector(detailFilm);

  return (
    <>
      <Header titolo="videoteca" />
      <Form />
      <ElencoPreview movies={films} />
      <DettaglioFilm movie={film} />
    </>
  );
}

export default Videoteca;
