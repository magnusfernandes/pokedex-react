import { Box, Container, Grid } from "@mui/material";
import { RootState, useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { getPokemonList } from "../../redux/actions";
import { useSelector } from "react-redux";
import { PokeCard } from "../ui";

export function Home() {
  const dispatch = useAppDispatch();
  const pokemonList = useSelector(
    (state: RootState) => state.pokemon.pokemonList
  );

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = () => {
    dispatch(getPokemonList());
  };

  return (
    <Container maxWidth="xl">
      <Box marginTop={4}>
        <Grid container spacing={4} justifyContent="center">
          {pokemonList.map((item) => (
            <Grid item xs={4} key={item.name}>
              <PokeCard pokemon={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
