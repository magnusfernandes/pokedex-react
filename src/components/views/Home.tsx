import { Container, Grid } from "@mui/material";
import { RootState, useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { getPokemonList } from "../../redux/actions";
import { useSelector } from "react-redux";

export function Home() {
  const dispatch = useAppDispatch();
  const pokemonList = useSelector(
    (state: RootState) => state.pokemon.pokemonList
  );

  useEffect(() => {
    fetchPokemonList();
  }, []);

  useEffect(() => {
    console.log(pokemonList);
  }, [pokemonList]);

  const fetchPokemonList = () => {
    dispatch(getPokemonList());
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={8}></Grid>
      </Grid>
    </Container>
  );
}
