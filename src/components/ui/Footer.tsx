import { Box, Container, Divider, Typography } from "@mui/material";

function Footer() {
  return (
    <>
      <Divider />
      <Container maxWidth="xl">
        <Box paddingBottom={1} paddingTop={1}>
          <Typography textAlign="center" variant="subtitle2">
            © 2024 Pokedex
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Footer;
