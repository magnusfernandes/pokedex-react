import {
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PokemonDetailsResponse } from "../../models";
import { getPokemonDetails } from "../../redux/actions";
import { useAppDispatch } from "../../redux/store";

const PokemonImage = styled.img`
  height: 10rem;
  width: 10rem;
  margin: auto;
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  text-transform: capitalize;
  position: relative;
`;
const CustomContainer = styled(Container)`
  margin-top: 3rem;
`;

export function PokemonInfo() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonDetailsResponse | null>(
    null
  );

  useEffect(() => {
    if (params["pokemonId"]) {
      fetchPokemonDetails(params["pokemonId"]);
    }
  }, []);

  const fetchPokemonDetails = async (pokemon: string) => {
    const { payload } = await dispatch(getPokemonDetails(pokemon));
    setPokemonInfo(new PokemonDetailsResponse(payload));
  };

  if (!pokemonInfo) {
    return null;
  }

  return (
    <CustomContainer maxWidth="sm">
      <Card>
        <CardContent>
          <PokemonImage src={pokemonInfo.sprites.front_default} />

          <Typography variant="body2" fontWeight={500} color="GrayText">
            N°&nbsp;{pokemonInfo.id}
          </Typography>
          <Typography variant="h6">{pokemonInfo.name}</Typography>

          <Stack
            direction="row"
            spacing={1}
            marginTop={1}
            justifyContent="center"
            marginBottom={4}
          >
            {pokemonInfo.types.map((item) => (
              <Chip
                key={`${item.slot}${pokemonInfo.name}`}
                label={item.type.name}
                size="small"
                color="secondary"
              />
            ))}
          </Stack>
          <Divider />
          <Grid container justifyContent="center" marginTop={4}>
            <Grid item xs={6}>
              <Typography variant="body1">Height</Typography>
              <Typography variant="h6">{pokemonInfo.height}m</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">Weight</Typography>
              <Typography variant="h6">{pokemonInfo.weight}kg</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </CustomContainer>
  );
}
