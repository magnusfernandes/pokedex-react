import { Card, CardContent, Typography } from "@mui/material";
import { PokemonListItem } from "../../models";

interface Props {
  pokemon: PokemonListItem;
}

export function PokeCard({ pokemon }: Props) {
  return (
    <Card>
      <CardContent>
        <Typography>{pokemon.name}</Typography>
      </CardContent>
    </Card>
  );
}
