import React from "react";
import { Form } from "./Form";
import { Elenco } from "./Elenco";
import { Header } from "./Header";
import { DettaglioFilm } from "./DettaglioFilm";
import { detailFilm, selectFilm } from "./elencoSlice";
import { useSelector } from "react-redux";
import { Film } from "./Form";
import Ricerca from "./Ricerca";
import Test from "./Test";

export interface Iprops {
  movie: Film;
}

function Videoteca() {
  const films = useSelector(selectFilm);
  const film = useSelector(detailFilm);

  return (
    <>
      <Header />
      <Form />
      <Elenco movies={films} />
      <DettaglioFilm movie={film} />
      <Ricerca />
      <Test />
    </>
  );
}

export default Videoteca;
