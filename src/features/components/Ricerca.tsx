/*
il risultato dell output va a finire in un nuovo array dello state, quindi bisogna creare un array nuovo che conterrà il risultato della ricerca nello slice

il componente Ricerca ha un input un pulsante ed un 

riutilizzare il componente elenco passandogli però solo gli elementi che sono il risultato della ricerca;

quindi bisogna trasformare Elenco in modo che riceva delle props, bisogna fare un filter 

creare una nuova pagina per la ricerca 

partire a lavorare dal componente elenco
*/

import React from "react";
import { Input, Text, Flex, Button, Spacer } from "@chakra-ui/react";
import { Elenco } from "./Elenco";
import { useSelector, useDispatch } from "react-redux";
import { Film } from "./Form";
import { wantedFilms, ricerca } from "./elencoSlice";
import { useState } from "react";

export const Ricerca = () => {
  const dispatch = useDispatch();
  const films = useSelector(wantedFilms);
  const [titleToResearch, setTitleToResearch] = useState("");

  const handleChange = (e: any) => {
    setTitleToResearch(e.target.value);
  };

  const handleClick = () => {
    dispatch(ricerca(titleToResearch));
  };

  return (
    <>
      <Flex mt="20">
        <Input
          m="2"
          placeholder="Inserire il titolo da ricercare"
          name="titoloRicercato"
          onChange={handleChange}
        ></Input>
        <Button m="2" onClick={handleClick}>
          Search
        </Button>
      </Flex>

      <Elenco movies={films} />
    </>
  );
};
