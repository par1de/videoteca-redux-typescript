import React, { useState } from "react";
import {
  Button,
  Flex,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  // Image,
  // Img,
  // Stack,
  // Box,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  addFilm,
  addFilmFromWanted,
  removeFilm,
  removeFilmFromWanted,
} from "./elencoSlice";
import { IArrayProps } from "./Videoteca";
import { Film } from "./Videoteca";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export const Elenco = (props: IArrayProps) => {
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const editedFilm: Film = {
    id: -1,
    titleInput: "",
    subTitleInput: "",
    annoUscita: "",
  };

  const [newFilm, setNewFilm] = useState(editedFilm);
  const [filmToEdit, setFilmToEdit] = useState(editedFilm);

  const handleChange = (e: any) => {
    const nome = e.target.name;
    const valore = e.target.value;
    setNewFilm({ ...newFilm, [nome]: valore });
  };

  const applyChange = () => {
    // console.log(newFilm);
    // console.log(filmToEdit);
    dispatch(removeFilm(filmToEdit));
    dispatch(removeFilmFromWanted(filmToEdit));
    dispatch(addFilm(newFilm));
    dispatch(addFilmFromWanted(newFilm));
  };

  const handleClick = (film: Film) => {
    onOpen();
    setFilmToEdit(film);
  };

  const handleClickDelete = (film: Film) => {
    dispatch(removeFilm(film.titleInput));
    dispatch(removeFilmFromWanted(film.titleInput));
  };

  return (
    <Flex direction="column">
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Film presenti a Database</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Locandina</Th>
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
                <Td>
                  {/* <Image
                    borderRadius="full"
                    boxSize="50px"
                    src="../../assets/Le_iene.jpg"
                    alt="Le Iene"
                  /> */}
                  <Wrap>
                    <WrapItem>
                      <Avatar
                        name="Dan Abrahmov"
                        src="../../assets/Le_Iene.jpg"
                        url="../../assets/Le_Iene.jpg"
                      />
                    </WrapItem>
                  </Wrap>
                </Td>
                <Td>{film.titleInput}</Td>
                <Td>{film.subTitleInput}</Td>
                <Td>{film.annoUscita.substr(0, 4)}</Td>
                <Td>
                  <Button
                    colorScheme="orange"
                    onClick={() => handleClick(film)}
                    // onClick={onOpen}
                  >
                    <EditIcon />
                  </Button>

                  {/* modale per la modifica del film */}
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Modifica il record del film</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <FormControl>
                          <FormLabel>Titolo</FormLabel>
                          <Input
                            placeholder={filmToEdit.titleInput}
                            onChange={handleChange}
                            value={newFilm.titleInput}
                            name="titleInput"
                          />
                        </FormControl>

                        <FormControl mt={4}>
                          <FormLabel>Sottotitolo</FormLabel>
                          <Input
                            placeholder={filmToEdit.subTitleInput}
                            onChange={handleChange}
                            value={newFilm.subTitleInput}
                            name="subTitleInput"
                          />
                        </FormControl>

                        <FormControl mt={4}>
                          <FormLabel>Anno</FormLabel>
                          <Input
                            placeholder={filmToEdit.annoUscita}
                            value={newFilm.annoUscita}
                            name="annoUscita"
                            type="date"
                            onChange={handleChange}
                          />
                        </FormControl>
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          colorScheme="teal"
                          mr={3}
                          onClick={() => applyChange()}
                        >
                          Applica modifiche
                        </Button>
                        <Button onClick={onClose} colorScheme="red">
                          Cancel
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => handleClickDelete(film)}
                  >
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
