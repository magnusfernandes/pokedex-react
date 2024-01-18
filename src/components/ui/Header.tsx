import { AppBar, Container, Toolbar } from "@mui/material";
import styled from "styled-components";

const Logo = styled.div`
  width: 120px;
  height: 40px;
  margin: auto;
  background-image: url("/assets/icons/pokemon-logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

function Header() {
  return (
    <AppBar position="relative" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
