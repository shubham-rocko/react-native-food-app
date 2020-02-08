export const TOGGLE_FAVORITE = "Toggle Favorite";

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id };
}