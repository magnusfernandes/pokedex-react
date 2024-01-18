import { Card, Chip, Stack, Typography } from "@mui/material";
import { PokemonDetailsResponse, PokemonListItem } from "../../models";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { getPokemonDetails } from "../../redux/actions";
import styled from "styled-components";

interface Props {
  pokemon: PokemonListItem;
}

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  text-transform: capitalize;
  position: relative;
`;
const PokemonImage = styled.img`
  height: 6rem;
  width: 6rem;
  margin: auto;
  position: relative;
  top: -10px;
`;

export function PokeCard({ pokemon }: Props) {
  const dispatch = useAppDispatch();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonDetailsResponse | null>(
    null
  );

  useEffect(() => {
    if (pokemon.name) {
      fetchPokemonDetails(pokemon.name);
    }
  }, [pokemon]);

  const fetchPokemonDetails = async (pokemon: string) => {
    const { payload } = await dispatch(getPokemonDetails(pokemon));
    setPokemonInfo(new PokemonDetailsResponse(payload));
  };

  if (!pokemonInfo) {
    // show loader here
    return null;
  }

  return (
    <Card>
      <CardContent>
        <PokemonImage
          src={pokemonInfo.sprites.front_default}
          alt={pokemonInfo.name}
        />
        <Typography variant="body2" fontWeight={500} color="GrayText">
          N°&nbsp;{pokemonInfo.id}
        </Typography>
        <Typography variant="h6">{pokemonInfo.name}</Typography>

        <Stack
          direction="row"
          spacing={1}
          marginTop={1}
          justifyContent="center"
        >
          {pokemonInfo.types.map((item) => (
            <Chip
              key={`${item.slot}${pokemon.name}`}
              label={item.type.name}
              size="small"
              color="secondary"
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
