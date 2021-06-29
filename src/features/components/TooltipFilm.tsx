/* 
NON UTILIZZATO
*/

import React, { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

// export function DettaglioFilm(film) {
//   const handleClick = () => {
//     // console.log(film);
//     return <Flex>{film}</Flex>;
//   };
//   return <Button onClick={handleClick}>Dettaglio film</Button>;
// }

export const TooltipFilm = (props: any) => {
  const [showDetail, setShowDetail] = useState(false);
  const filmDetail = (
    <Flex m="2">
      <Flex>
        <Text color="teal">Id: </Text>
        {props.film.id}{" "}
      </Flex>
      <Flex>
        <Text ml="2" color="teal">
          Titolo:{" "}
        </Text>
        {props.film.titleInput}{" "}
      </Flex>
      <Flex>
        <Text ml="2" color="teal">
          Sottotitolo:{" "}
        </Text>
        {props.film.subTitleInput}{" "}
      </Flex>
      <Flex>
        <Text ml="2" color="teal">
          Anno di pubblicazione:{" "}
        </Text>{" "}
        {props.film.annoUscita}
      </Flex>
    </Flex>
  );
  const handleClick = () => {
    setShowDetail(true);
  };

  return (
    <>
      <Button m="2" onClick={handleClick}>
        Dettaglio film
      </Button>
      {showDetail ? filmDetail : null}
    </>
  );
};
