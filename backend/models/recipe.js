import mongoose from "mongoose";
const { Schema, model } = mongoose;

const recipeSchema = new Schema(
    {
        recipeName: {
            type: String,
            required: true,

        },
        ingredients: {
            type: String,
            required: true,

        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default model("Recipe", recipeSchema);