import { Meals } from '../../data/dummy-data';

const initialState = {
    meals: Meals,
    filteredMeals: Meals,
    favoriteMeals: []
}

const mealsReducer = (state =initialState, action) => {
    return state
}

export default mealsReducer;