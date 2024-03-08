import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Metro } from "../../models/commuting.model";
import CommutingService from "../../services/CommutingService";

type Status = "loading" | "idle" | "succeeded" | "failed";

interface State {
    items: Metro[];
    status: Status;
    error: string | null | undefined; 
}

const initialState: State = {
    items: [],
    status: "idle",
    error: null
};

export const fetchMetros = createAsyncThunk("metros/fetchMetros", async () => {
    const response = await CommutingService.getCommuting();
    return response.responseData.metros;
});

const metrosSlice = createSlice({
    name: "metros",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMetros.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchMetros.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload;
        });
        builder.addCase(fetchMetros.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    }
});

export default metrosSlice.reducer;