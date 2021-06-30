import React from "react";
import { useSelector } from "react-redux";
import { wantedFilms, selectFilm } from "./elencoSlice";
import { Button } from "@chakra-ui/react";

function Test() {
  const film = useSelector(selectFilm);
  const films = useSelector(wantedFilms);

  const handleClickElenco = () => {
    console.log(film);
  };

  const handleClickWanted = () => {
    console.log(films);
  };

  return (
    <>
      <Button m={2} onClick={handleClickElenco}>
        Log elencoFilm
      </Button>

      <Button m={2} onClick={handleClickWanted}>
        Log wantedFilms
      </Button>
    </>
  );
}

export default Test;
