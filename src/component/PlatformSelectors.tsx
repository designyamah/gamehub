import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { GamePaltform } from "../hooks/usePlatform";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onselectedPlatform: (platform: GamePaltform) => void;
  selectedplatform: any;
}

function PlatformSelectors({ onselectedPlatform, selectedplatform }: Props) {
  const { platform, error } = usePlatform();
  const Skeleton = [1, 2, 3, 4];

  //   if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {Object.keys(selectedplatform).length === 0
          ? "Platform"
          : selectedplatform?.name}
      </MenuButton>
      <MenuList>
        {platform.length === 0
          ? Skeleton.map((sl) => <GenreSkeleton key={sl} />)
          : platform.map((plform) => (
              <MenuItem
                key={plform.id}
                onClick={() => onselectedPlatform(plform)}
              >
                {plform.name}
              </MenuItem>
            ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelectors;
