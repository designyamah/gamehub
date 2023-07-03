import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import GenreSkeleton from "./GenreSkeleton";
import usePlatform from "../hooks/usePlatform";

interface Props {
  onselectedSortOrder: (sortOrder: any) => void;
  selectedSort: any;
}

const SortSelector = ({ onselectedSortOrder, selectedSort }: Props) => {
  const Skeleton = [1, 2, 3, 4];
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const { platform } = usePlatform();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {Object.keys(selectedSort).length === 0
          ? "Order by: Relevence"
          : "Order by: " + selectedSort.label}
      </MenuButton>
      <MenuList>
        {platform.length === 0
          ? Skeleton.map((sl) => <GenreSkeleton key={sl} />)
          : sortOrder.map((order) => (
              <MenuItem
                key={order.value}
                onClick={() => onselectedSortOrder(order)}
                value={order.value}
              >
                {order.label}
              </MenuItem>
            ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
