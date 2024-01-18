import { Box, Container, Typography } from "@mui/material";

function Footer() {
  const currentDate = new Date();

  return (
    <>
      <Container maxWidth="xl">
        <Box paddingBottom={1} paddingTop={1}>
          <Typography textAlign="center" variant="subtitle2">
            © {currentDate.getFullYear()} Pokedex
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Footer;
