import { AppBar, Container, InputBase, Toolbar } from "@mui/material";
import styled from "styled-components";

const Logo = styled.div`
  width: 120px;
  height: 30px;
  background-image: url("/assets/icons/pokemon-logo.svg");
  background-repeat: no-repeat;
  background-size: 100% 200%;
  background-position: center;
`;

const Search = styled.div`
  position: relative;
  border-radius: 10px;
  margin-left: auto;
`;

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

const StyledInputBase = styled(InputBase)(() => ({
  color: "inherit",
  width: "100%",
  // "& .MuiInputBase-input": {
  //   padding: theme.spacing(1, 1, 1, 0),
  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //   transition: theme.transitions.create("width"),
  //   [theme.breakpoints.up("sm")]: {
  //     width: "12ch",
  //     "&:focus": {
  //       width: "20ch",
  //     },
  //   },
  // },
}));

function Header() {
  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Search>
            {/* <SearchIconWrapper><SearchIcon /></SearchIconWrapper> */}
            <StyledInputBase placeholder="Search…" />
          </Search>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
