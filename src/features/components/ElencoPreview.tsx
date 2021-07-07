import React from "react";
import { removeFilm, scegliFilm } from "./elencoSlice";
import { Flex, Button, Text, SimpleGrid } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { IArrayProps, Film } from "./Videoteca";
import { DeleteIcon } from "@chakra-ui/icons";
import { VscOpenPreview } from "react-icons/vsc";
import { getRandoms } from "../utils/utility";
// import { TooltipFilm } from "./TooltipFilm";

export const ElencoPreview = (props: IArrayProps) => {
  const dispatch = useDispatch();

  // const handleClick = (film: Film) => {
  //   dispatch(scegliFilm(film));
  // };

  // TODO - proseguire sviluppo da qui
  // const randomMovie: IArrayProps = getRandoms(props.movies, 3);
  console.log(getRandoms(props.movies, 3));

  return (
    <Flex direction="column">
      {props.movies.map((film: Film, index: number) => {
        return (
          <React.Fragment key={index}>
            <SimpleGrid columns={2}>
              <Text align="left" m="1">
                {film.titleInput}
              </Text>
              <Flex>
                <Button
                  m="2"
                  colorScheme="red"
                  onClick={() => dispatch(removeFilm(film.titleInput))}
                >
                  <DeleteIcon />
                  Elimina
                </Button>
                <Button
                  m="2"
                  colorScheme="green"
                  onClick={() => dispatch(scegliFilm(film))}
                >
                  <Flex>
                    <VscOpenPreview size="1.2em" />
                    Anteprima
                  </Flex>
                </Button>
              </Flex>
            </SimpleGrid>
          </React.Fragment>
        );
      })}
    </Flex>
  );
};
