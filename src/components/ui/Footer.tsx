import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";

const CopyrightIcon = styled(FontAwesomeIcon)`
  margin-right: 0.4rem;
`;

function Footer() {
  const currentDate = new Date();

  return (
    <>
      <Container maxWidth="xl">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingBottom={1}
          paddingTop={1}
        >
          <CopyrightIcon icon={faCopyright} />
          <Typography textAlign="center" variant="subtitle2">
            {currentDate.getFullYear()} Pokedex
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Footer;
