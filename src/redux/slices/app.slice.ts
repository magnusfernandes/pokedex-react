import { AlertColor } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SnackbarData {
  show: boolean;
  message: string;
  type: AlertColor | undefined;
}

interface InitialState {
  loading: boolean;
  snackbarData: SnackbarData;
}

const initialState: InitialState = {
  loading: false,
  snackbarData: {
    show: false,
    message: "",
    type: "info",
  },
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    changeLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSnackbarData: (state, action: PayloadAction<SnackbarData>) => {
      state.snackbarData = action.payload;
    },
    resetSnackbar: (state) => {
      state.snackbarData = initialState.snackbarData;
    },
  },
});

export const { changeLoadingStatus, setSnackbarData, resetSnackbar } =
  appSlice.actions;

export const appReducer = appSlice.reducer;
