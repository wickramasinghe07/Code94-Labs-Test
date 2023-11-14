import { Router } from "express";
const recipeRoute = Router();
import recipeController from "../controllers/recipe.js";


recipeRoute.post(
    "/api/recipe/create",
    recipeController.createRecipe
  );
  recipeRoute.get(
    "/api/recipe/all",
    recipeController.getRecipe
  );
  recipeRoute.get(
    "/api/recipe/:id",
    recipeController.getOneRecipe
  );
  recipeRoute.put(
    "/api/recipe/update/:id",
    recipeController.updateRecipe
  );
  recipeRoute.delete(
    "/api/recipe/delete/:id",
    recipeController.deleteRecipe
  );
  export default recipeRoute;