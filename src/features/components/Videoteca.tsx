import React from "react";
import { Form } from "./Form";
import { Elenco } from "./Elenco";
import { Header } from "./Header";
import { DettaglioFilm } from "./DettaglioFilm";
import { detailFilm, selectFilm } from "./elencoSlice";
import { useSelector } from "react-redux";
import { Film } from "./Form";

export interface Iprops {
  movie: Film;
}

function Videoteca() {
  const films = useSelector(selectFilm);
  const film = useSelector(detailFilm);

  return (
    <>
      <Header titolo="videoteca" />
      <Form />
      <Elenco movies={films} />
      <DettaglioFilm movie={film} />
    </>
  );
}

export default Videoteca;
