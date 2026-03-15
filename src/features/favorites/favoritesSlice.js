import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => {
    const savedFavorites = localStorage.getItem("boo-favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const initialState = {
    items: loadFavorites(),
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            if (!state.items.includes(action.payload)) {
                state.items.push(action.payload);
                localStorage.setItem("boo-favorites", JSON.stringify(state.items));
            }
        },
        removeFavorite: (state, action) => {
            state.items = state.items.filter((id) => id !== action.payload);
            localStorage.setItem("boo-favorites", JSON.stringify(state.items));
        },
        toggleFavorite: (state, action) => {
            const exists = state.items.includes(action.payload);

            if (exists) {
                state.items = state.items.filter((id) => id !== action.payload);
            } else {
                state.items.push(action.payload);
            }

            localStorage.setItem("boo-favorites", JSON.stringify(state.items));
        },
        clearFavorites: (state) => {
            state.items = [];
            localStorage.setItem("boo-favorites", JSON.stringify(state.items));
        },
    },
});

export const {
    addFavorite,
    removeFavorite,
    toggleFavorite,
    clearFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;