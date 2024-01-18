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
import { Navigate, Route, Routes } from "react-router-dom";

import { resetSnackbar } from "./redux/slices";
import { RootState, useAppDispatch } from "./redux/store";
import { Home } from "./components/views/Home";

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
    <Box sx={{ width: "100%" }}>
      {loading && <LinearProgress className="tw-z-10 tw-absolute tw-w-full" />}
      <Box className="tw-z-0" sx={{ width: "100%" }}>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
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
          <Typography variant="subtitle2" className="tw-font-medium">
            {snackbarData.message}
          </Typography>
        </Alert>
      </Snackbar>
    </Box>
  );
}
