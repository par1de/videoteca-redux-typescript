import React from "react";
import { Input, Flex, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { wantedFilms, ricerca, selectFilm } from "./elencoSlice";
import { useState } from "react";
import { Header } from "./Header";
import { Elenco } from "./Elenco";

function Ricerca() {
  const dispatch = useDispatch();
  const films = useSelector(wantedFilms);
  const film = useSelector(selectFilm);
  const [titleToResearch, setTitleToResearch] = useState("");

  const handleChange = (e: any) => {
    setTitleToResearch(e.target.value);
  };

  const handleClick = () => {
    dispatch(ricerca(titleToResearch));
  };

  return (
    <>
      <Header titolo="Ricerca" />
      <Flex mt="2">
        <Input
          m="2"
          placeholder="Inserire il titolo da ricercare"
          name="titoloRicercato"
          onChange={handleChange}
        ></Input>
        <Button m="2" onClick={handleClick} colorScheme="teal">
          Search
        </Button>
      </Flex>
      <Elenco movies={films} />
    </>
  );
}

export default Ricerca;
