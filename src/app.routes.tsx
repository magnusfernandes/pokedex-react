import {
  Alert,
  Box,
  LinearProgress,
  Snackbar,
  SnackbarCloseReason,
  Typography,
} from "@mui/material";
import { SyntheticEvent } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { resetSnackbar } from "./redux/slices";
import { RootState, useAppDispatch } from "./redux/store";
import { Home, PokemonInfo } from "./components/views";

export function AppRoutes() {
  const dispatch = useAppDispatch();
  const loading = useSelector((state: RootState) => state.app.loading);
  const snackbarData = useSelector(
    (state: RootState) => state.app.snackbarData
  );

  const handleClose = (
    event: SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(resetSnackbar());
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      {loading && <LinearProgress />}
      <Box sx={{ width: "100%", height: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:pokemonId" element={<PokemonInfo />} />
        </Routes>
      </Box>

      <Snackbar
        open={snackbarData.show}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarData.type}
          sx={{ width: "100%" }}
        >
          <Typography variant="subtitle2">{snackbarData.message}</Typography>
        </Alert>
      </Snackbar>
    </Box>
  );
}
