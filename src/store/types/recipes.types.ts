import {
  RECIPES_DATA_REQUEST,
  RECIPES_DATA_SUCCESS,
  RECIPES_MORE_DATA_SUCCESS,
  RECIPES_MORE_DATA_REQUEST,
} from 'store/actions/recipes.actions';

export interface RecipeResult {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  openLicense: number;
  image: string;
}

export interface RecipesFetchSuccess {
  results: RecipeResult[];
  baseUri: string;
  number: number;
  offset: number;
  totalResults: number;
}

export interface RecipesState {
  items: RecipeResult[];
}

export interface RecipesRequestAction {
  type: typeof RECIPES_DATA_REQUEST;
  payload: {
    inputValue: string;
  };
}

export interface RecipesSuccessAction {
  type: typeof RECIPES_DATA_SUCCESS;
  payload: RecipesFetchSuccess;
}

export interface RecipesMoreRequestAction {
  type: typeof RECIPES_MORE_DATA_REQUEST;
  payload: {
    inputValue: string;
    offset: number;
  };
}

export interface RecipesMoreSuccessAction {
  type: typeof RECIPES_MORE_DATA_SUCCESS;
  payload: RecipesFetchSuccess;
}

export type RecipesActionTypes =
  | RecipesRequestAction
  | RecipesSuccessAction
  | RecipesMoreRequestAction
  | RecipesMoreSuccessAction;
