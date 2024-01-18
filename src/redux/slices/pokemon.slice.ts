import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getPokemonList } from "../actions";
import { PokemonListItem, PokemonListResponse } from "../../models";

interface InitialState {
  totalCount: number;
  nextPage: string | null;
  previousPage: string | null;
  pokemonList: PokemonListItem[];
}

const initialState: InitialState = {
  totalCount: 0,
  nextPage: null,
  previousPage: null,
  pokemonList: [],
};

export const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get pokemon list
    builder.addCase(
      getPokemonList.fulfilled,
      (state, action: PayloadAction<PokemonListResponse>) => {
        if (action.payload) {
          const { count, next, previous, results } = action.payload;
          state.totalCount = count;
          state.nextPage = next;
          state.previousPage = previous;
          state.pokemonList = results;
        }
      }
    );
  },
});

export const pokemonReducer = pokemonSlice.reducer;
