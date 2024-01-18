import {
  Container,
  Divider,
  Grid,
  Table,
  TableFooter,
  TablePagination,
  TableRow,
} from "@mui/material";
import { RootState, useAppDispatch } from "../../redux/store";
import { useEffect, useState } from "react";
import { getPokemonList } from "../../redux/actions";
import { useSelector } from "react-redux";
import { PokeCard, SearchBar } from "../ui";
import styled from "styled-components";
import { PokemonListRequest } from "../../models";
import { useSearchParams } from "react-router-dom";
import { getQueryParam } from "../../utils";

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ContentBox = styled.div`
  flex: 1;
  padding: 2rem 0;
  height: 100%;
  overflow-y: auto;
`;

export function Home() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const pokemonList = useSelector(
    (state: RootState) => state.pokemon.pokemonList
  );
  const totalCount = useSelector(
    (state: RootState) => state.pokemon.totalCount
  );

  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage] = useState(10);

  useEffect(() => {
    const oldParams = getQueryParam(searchParams);
    const page_param = oldParams["page"];
    const query_param = oldParams["query"] ? oldParams["query"] : "";

    const page = page_param ? +page_param : 0;

    const newParams = {
      ...oldParams,
      page: `${page}`,
      query: query_param,
    };
    setSearchParams(newParams);
    fetchPokemonList();
  }, [searchParams]);

  useEffect(() => {
    const params = getQueryParam(searchParams);
    setSearchParams({
      ...params,
      page: currentPage,
    });
  }, [currentPage]);

  const fetchPokemonList = () => {
    dispatch(
      getPokemonList(
        new PokemonListRequest({
          offset: currentPage * rowsPerPage,
          limit: rowsPerPage,
        })
      )
    );
  };

  const pageChanged = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <MainContainer maxWidth="xl" disableGutters>
      <SearchBar />
      <ContentBox>
        <Container maxWidth="xl">
          <Grid container spacing={4} justifyContent="center">
            {pokemonList.map((item) => (
              <Grid item xs={4} md={6} lg={3} key={item.name}>
                <PokeCard pokemon={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </ContentBox>
      <Divider />
      {totalCount > 0 && (
        <Table>
          <TableFooter>
            <TableRow>
              <TablePagination
                page={currentPage}
                count={totalCount}
                rowsPerPage={rowsPerPage}
                onPageChange={(_, page) => pageChanged(page)}
                rowsPerPageOptions={[]}
              />
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </MainContainer>
  );
}
