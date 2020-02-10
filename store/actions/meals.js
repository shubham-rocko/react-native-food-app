export const TOGGLE_FAVORITE = "Toggle Favorite";
export const SET_FILTERS = "Set Filters"

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id };
}

export const setFilters = (filters) => {
    return { type: SET_FILTERS, filters: filters };
}