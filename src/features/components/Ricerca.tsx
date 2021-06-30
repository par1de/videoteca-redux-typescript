import React from "react";
import { Input, Flex, Button } from "@chakra-ui/react";
import { Elenco } from "./Elenco";
import { useSelector, useDispatch } from "react-redux";
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
