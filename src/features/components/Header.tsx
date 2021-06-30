import React from "react";
import { Heading } from "@chakra-ui/react";

export interface IHeader {
  titolo: string;
}

export const Header = (props: IHeader) => {
  return props.titolo === "videoteca" ? (
    <Heading color="teal" mb="5">
      Videoteca
    </Heading>
  ) : (
    <Heading color="teal" mb="5">
      Ricerca
    </Heading>
  );
};
