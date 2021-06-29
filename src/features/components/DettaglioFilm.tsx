import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Iprops } from "./Videoteca";
import { isSelected } from "./elencoSlice";
import { useSelector } from "react-redux";

export const DettaglioFilm = (props: Iprops) => {
  const selected = useSelector(isSelected);
  const filmDetail = (
    <Flex m="2">
      <Flex>
        <Text color="teal">Id: </Text>
        {props.movie.id}{" "}
      </Flex>
      <Flex>
        <Text ml="2" color="teal">
          Titolo:{" "}
        </Text>
        {props.movie.titleInput}{" "}
      </Flex>
      <Flex>
        <Text ml="2" color="teal">
          Sottotitolo:{" "}
        </Text>
        {props.movie.subTitleInput}{" "}
      </Flex>
      <Flex>
        <Text ml="2" color="teal">
          Anno di pubblicazione:{" "}
        </Text>{" "}
        {props.movie.annoUscita}
      </Flex>
    </Flex>
  );

  const noFilmSelected = (
    <Flex>
      <Text color="teal">
        Non ci sono film selezionati
      </Text>
    </Flex>
  );

  return (selected ? filmDetail : noFilmSelected);
};

