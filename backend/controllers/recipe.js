import Recipe from "../models/recipe.js";
const recipeController = {
  createRecipe: async (req, res) => {
    try {
      
      const { recipeName,ingredients ,description, image } = req.body;
      //checking all fields are fill
      if (!recipeName || !ingredients || !description || !image)
        return res.status(400).json({
          msg: "Please fill in all fields.",
        });

      const newRecipe = new Recipe({
        recipeName,ingredients ,description, image
      });
      await newRecipe.save();
      res.json({
        message: "Recipe file create success",
        data: newRecipe,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  getRecipe: async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.json({
        message: "recipes fetch success",
        data: recipes
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  getOneRecipe: async (req, res) => {
    const id = req.params.id;
    try {
      const recipe = await Recipe.findOne({ _id: id });
      res.json({
        message: "recipe fetch success",
        data: recipe
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message
      });
    }
  },

  updateRecipe: async (req, res) => {
    try {
      const id = req.params.id;
      const {recipeName,ingredients ,description, image} = req.body;

      await Recipe.findOneAndUpdate(
        { _id: id },
        {recipeName,ingredients ,description, image}
      );
      res.json({
        message: "Recipe update success",
        data: {recipeName,ingredients ,description, image},
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  deleteRecipe: async (req, res) => {
    try {
      const id = req.params.id;

      await Recipe.findByIdAndDelete({ _id: id });
      res.json({ message: "recipe delete success !" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
export default recipeController;