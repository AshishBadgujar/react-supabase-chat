import { Grid, GridItem, Image } from "@chakra-ui/react";
import { useAppContext } from "../context/appContext";
export default function Header() {
  const { username } = useAppContext();
  return (
    <Grid
      templateColumns="max-content 1fr min-content"
      justifyItems="center"
      alignItems="center"
      bg="white"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <GridItem justifySelf="start" m="2">
        <Image src="/logo.png" height="30px" ml="2" />
      </GridItem>
      <GridItem justifySelf="end" alignSelf="center" mr="4">
        Welcome <strong>{username}</strong>
      </GridItem>
    </Grid>
  );
}
