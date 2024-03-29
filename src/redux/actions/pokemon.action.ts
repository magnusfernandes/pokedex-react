import { createAsyncThunk } from "@reduxjs/toolkit";

import { makeRequest } from "../../services";
import { PokemonListRequest, RequestMethod } from "../../models";

export const getPokemonList = createAsyncThunk(
  "getPokemonList",
  async (payload: PokemonListRequest, { rejectWithValue }) => {
    try {
      const response = await makeRequest(
        "/pokemon",
        RequestMethod.GET,
        payload
      );
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPokemonDetails = createAsyncThunk(
  "getPokemonDetails",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await makeRequest(`/pokemon/${id}`, RequestMethod.GET);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
