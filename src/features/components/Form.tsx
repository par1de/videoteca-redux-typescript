import React, { useState } from "react";
import { Button, Input, Flex } from "@chakra-ui/react";
import { addFilm } from "./elencoSlice";
import { useDispatch } from "react-redux";
// import { store } from "../../app/store";
import { Film } from "./Videoteca";

export function Form() {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  const elemento: Film = {
    id: id,
    titleInput: "",
    subTitleInput: "",
    annoUscita: "",
  };
  const [item, setItem] = useState(elemento);

  const handleChange = (e: any) => {
    const nome = e.target.name;
    const valore = e.target.value;

    // setItem({
    //   titolo: nome === "titleInput" ? valore : item.titolo,
    //   sottoTitolo: nome === "subTitleInput" ? valore : item.sottoTitolo,
    // });

    setItem({ ...item, [nome]: valore }); // metodo dinamico per ottenere lo stesso risultato
  };

  const handleClick = () => {
    item.id = id;
    setId(id + 1);
    dispatch(addFilm(item));
    // console.log(store.getState());  // per vedere il contenuto dello state di redux
  };

  return (
    <Flex>
      <Input
        placeholder="Id"
        m="2"
        w="60px"
        variant="filled"
        value={item.id}
        name="id"
        onChange={handleChange}
        isReadOnly
      />
      <Input
        placeholder="Titolo"
        m="2"
        w="500px"
        value={item.titleInput}
        name="titleInput"
        onChange={handleChange}
        isRequired
      />
      <Input
        placeholder="Sottotitolo"
        m="2"
        w="320px"
        value={item.subTitleInput}
        name="subTitleInput"
        onChange={handleChange}
      />
      <Input
        placeholder="Anno di pubblicazione"
        m="2"
        w="200px"
        value={item.annoUscita}
        name="annoUscita"
        type="date"
        onChange={handleChange}
      />
      <Button m="2" colorScheme="teal" size="md" onClick={handleClick}>
        Add
      </Button>
    </Flex>
  );
}
