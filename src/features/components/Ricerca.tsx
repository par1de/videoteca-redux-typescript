import React from "react";
import { Input, Flex, Button } from "@chakra-ui/react";
import { Elenco } from "./Elenco";
import { useSelector, useDispatch } from "react-redux";
import { wantedFilms, ricerca, selectFilm } from "./elencoSlice";
import { useState } from "react";

function Ricerca() {
  const dispatch = useDispatch();
  const films = useSelector(wantedFilms);
  const film = useSelector(selectFilm);
  const [titleToResearch, setTitleToResearch] = useState("");

  const handleChange = (e: any) => {
    setTitleToResearch(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    dispatch(ricerca(titleToResearch));
    console.log(titleToResearch);
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
      {console.log(film)}
      {console.log(films)}
    </>
  );
}

export default Ricerca;
