import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories; // This is an input selector

export const selectCategories = createSelector(
  // This is a memoized selector
  [selectCategoryReducer], // This is an array of input selectors
  (categoriesSlice) => categoriesSlice.categories
  // This is the output selector
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
