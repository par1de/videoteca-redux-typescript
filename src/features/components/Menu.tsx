import { Link } from "react-router-dom";
import { Flex, HStack, Tag } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { FaHome } from "react-icons/fa";

function Menu() {
  return (
    <>
      <HStack>
        <Link to="/" className="nav-Link">
          <Tag size="lg" colorScheme="teal">
            <Flex mr={2}>
              <FaHome className="mr-2" />
            </Flex>
            Home
          </Tag>
        </Link>

        <Link to="/ricerca" className="nav-link">
          <Tag size="lg" colorScheme="teal">
            <Flex mr={2}>
              <Search2Icon />
            </Flex>
            Ricerca
          </Tag>
        </Link>
      </HStack>
    </>
  );
}

export default Menu;
