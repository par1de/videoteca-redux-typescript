import React from "react";
import { removeFilm, scegliFilm } from "./elencoSlice";
import { Flex, Button, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { IArrayProps, Film } from "./Videoteca";
// import { TooltipFilm } from "./TooltipFilm";

export const ElencoPreview = (props: IArrayProps) => {
  const dispatch = useDispatch();

  // const handleClick = (film: Film) => {
  //   dispatch(scegliFilm(film));
  // };

  return (
    <Flex direction="column">
      {props.movies.map((film: Film, index: number) => {
        return (
          <Flex key={index}>
            <Text m="1">{film.titleInput}</Text>

            {/* <Text>{film.subTitleInput}</Text>
            <Spacer />
            <Text>{film.annoUscita}</Text> */}
            <Button
              m="2"
              colorScheme="red"
              onClick={() => dispatch(removeFilm(film.titleInput))}
            >
              elimina
            </Button>

            {/* <TooltipFilm film={film} /> */}

            <Button
              m="2"
              colorScheme="green"
              onClick={() => dispatch(scegliFilm(film))}
            >
              {/* <Button m="2" onClick={() => handleClick(film)}> */}
              Dettaglio film
            </Button>
          </Flex>
        );
      })}
    </Flex>
  );
};
