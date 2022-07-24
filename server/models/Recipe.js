const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is require',
    },
    description: {
        type: String,
        required: 'This field is require',
    },
    email: {
        type: String,
        required: 'This field is require',
    },
    ingredients: {
        type: Array,
        required: 'This field is require',
    },
    category: {
        type: String,
        enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian'],
        required: 'This field is require',
    },
    image: {
        type: String,
        required: 'This field is require',
    },
});

recipeSchema.index({"name": "text", "description": "text"});
// wildCard Indexing
// recipeSchema.index({"$**": 'text'})

// collection name of Recipe
module.exports = mongoose.model('Recipe', recipeSchema);