import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "light"}
        onChange={toggleColorMode}
        colorScheme="green"
      ></Switch>
      <Text>{colorMode === "light" ? "Light" : "Dark"} Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
