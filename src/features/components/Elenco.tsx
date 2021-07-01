import React from "react";
import {
  Button,
  Flex,
  Spacer,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeFilm, scegliFilm } from "./elencoSlice";
import { IArrayProps } from "./Videoteca";
import { Film } from "./Videoteca";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export const Elenco = (props: IArrayProps) => {
  const dispatch = useDispatch();

  const handleClickEdit = (film: Film) => {};

  const handleClickDelete = (film: Film) => {
    dispatch(removeFilm(film.titleInput));
  };

  return (
    <Flex direction="column">
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Film presenti a Database</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Titolo</Th>
            <Th>Sottotitolo</Th>
            <Th>Anno Uscita</Th>
            <Th>Modifica</Th>
            <Th>Elimina</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.movies.map((film: Film, index: number) => {
            return (
              <Tr key={index}>
                <Td>{film.id}</Td>
                <Td>{film.titleInput}</Td>
                <Td>{film.subTitleInput}</Td>
                <Td>{film.annoUscita.substr(0, 4)}</Td>
                <Td>
                  <Button colorScheme="orange">
                    <EditIcon />
                  </Button>
                </Td>
                <Td>
                  <Button colorScheme="red" onClick={() => handleClickDelete}>
                    <DeleteIcon />
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Titolo</Th>
            <Th>Sottotitolo</Th>
            <Th>Anno Uscita</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Flex>
  );
};
