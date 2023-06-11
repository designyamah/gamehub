import { HStack, Icon, List, ListItem } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaApple,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

// interface Props {
//   platform: Platform;
// }
interface Props {
  platform: Platform[];
}

// const IconPlatForm = ({ platform }: Props) => {
//   return <ListItem>{platform.slug}</ListItem>;
// };

// method 2
const IconPlatForm = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack marginY={1}>
      {platform.map((plf) => (
        <Icon key={plf.id} as={iconMap[plf.slug]} color={"gray.500"} />
      ))}
    </HStack>
  );
};

export default IconPlatForm;
