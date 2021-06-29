import React from "react";
import { Form } from "./Form";
import { Elenco } from "./Elenco";
import { Header } from "./Header";
import { DettaglioFilm } from "./DettaglioFilm";
import { detailFilm } from "./elencoSlice";
import { useSelector } from "react-redux";
import { Film } from "./Form";
import { selectFilm } from "./elencoSlice";
import { Ricerca } from "./Ricerca";


export interface Iprops {
  movie: Film;
}

export interface IArrayProps {
  movies: Array<Film>;
}

function Videoteca() {
  const films = useSelector(selectFilm);
  const film = useSelector(detailFilm);

  return (
    <>
      <Header />
      <Form />
      <Elenco movies={films}/>
      <DettaglioFilm movie={film} />
      <Ricerca />
    </>
  );
}

export default Videoteca;
