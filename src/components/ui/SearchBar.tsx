import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Card, CardContent, Container, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useDebounce } from "use-debounce";
import * as yup from "yup";
import { getQueryParam } from "../../utils";

const filterSchema = yup
  .object({
    search: yup
      .string()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .min(1),
  })
  .required();

const SearchIcon = styled(FontAwesomeIcon)`
  margin-right: 0.6rem;
`;

export function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { control, watch } = useForm({
    mode: "all",
    defaultValues: {
      search: searchParams.get("query") ? searchParams.get("query") : "",
    },
    resolver: yupResolver(filterSchema),
  });
  const watchSearch = watch("search");
  const [searchQuery] = useDebounce(watchSearch, 1000);

  useEffect(() => {
    const newParams = getQueryParam(searchParams);
    if (searchQuery) {
      if (searchQuery.trim().length === 0) {
        searchParams.delete("query");
        setSearchParams(searchParams);
      } else {
        setSearchParams({ ...newParams, query: searchQuery.trim() });
      }
    }
  }, [searchQuery]);

  return (
    <Container maxWidth="md">
      <Box marginTop={2} marginBottom={2}>
        <Card>
          <CardContent>
            <Controller
              name="search"
              control={control}
              render={({ field: { ref, onChange, ...field } }) => (
                <TextField
                  ref={ref}
                  {...field}
                  fullWidth
                  onChange={onChange}
                  size="small"
                  placeholder="Search your favorite pokemon"
                  InputProps={{
                    startAdornment: (
                      <SearchIcon
                        icon={faSearch}
                        color="rgb(145, 158, 171)"
                        size="sm"
                      />
                    ),
                  }}
                />
              )}
            />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
