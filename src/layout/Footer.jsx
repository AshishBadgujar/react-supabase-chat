import { Box, Grid, GridItem } from "@chakra-ui/react";
import MessageForm from "../components/MessageForm";
export default function Footer() {
  return (
    <Box position="fixed" bottom="0" width="100%">
      <MessageForm />
      <Grid
        textAlign="center"
        alignItems="center"
        py="4px"
        px="30px"
        height="40px"
        bg="white"
      >
        <GridItem >
          <a>Made with ❤️</a>
        </GridItem>
      </Grid>
    </Box>
  );
}
