import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import GenreSkeleton from "./GenreSkeleton";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        order by: Relevence
      </MenuButton>
      <MenuList>
        <MenuItem>ITem1</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
