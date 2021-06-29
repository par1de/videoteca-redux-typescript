import React from "react";
import { useSelector } from "react-redux";
import { removeFilm, selectFilm, scegliFilm } from "./elencoSlice";
import { Flex, Button, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Film } from "./Form";
// import { TooltipFilm } from "./TooltipFilm";
import { IArrayProps } from "./Videoteca";

export const Elenco = (props: IArrayProps) => {
  const dispatch = useDispatch();
  const films = useSelector(selectFilm);

  // const handleClick = (film: Film) => {
  //   dispatch(scegliFilm(film));
  // };

  return (
    <Flex direction="column">
      {films.map((film: Film, index: number) => {
        return (
          <Flex key={index}>
            <Text m="1">{film.titleInput}</Text>

            {/* <Text>{film.subTitleInput}</Text>
            <Spacer />
            <Text>{film.annoUscita}</Text> */}
            <Button m="2" onClick={() => dispatch(removeFilm(film.titleInput))}>
              elimina
            </Button>

            {/* <TooltipFilm film={film} /> */}

            <Button m="2" onClick={() => dispatch(scegliFilm(film))}>
            {/* <Button m="2" onClick={() => handleClick(film)}> */}
              Dettaglio film
            </Button>
          </Flex>
        );
      })}
    </Flex>
  );
};
