require('../models/database');
// collection
const Category = require('../models/Category');
const Recipe  = require('../models/Recipe')

/**
 *  GET /
 *  Homepage
 */
exports.homepage = async(req, res) => {

    try{
        const limitNumber = 5;
        const categories = await Category.find({
        }).limit(limitNumber);

        // latest recipes
        const latest = await Recipe.find({}).sort({
            _id: -1
        }).limit(limitNumber);

        const thai = await Recipe.find({'category': 'Thai'}).limit(limitNumber);
        const american = await Recipe.find({'category': 'American'}).limit(limitNumber);
        const chinese = await Recipe.find({'category': 'Chinese'}).limit(limitNumber);

        const food = { latest, thai, american, chinese };
        res.render('index', {title : 'Cooking Blog - Homepage', categories, food});
    }catch(error){
        res.status(500).send({
            message: error.message || "Error Occured"
        });
    }  
};



/**
 *  GET /categories
 *  Categories
 */

exports.exploreCategories = async(req, res) => {

    try{
        const limitNumber = 5;
        const categories = await Category.find({
        });


        res.render('categories', {title : 'Cooking Blog - Categories', categories});
    }catch(error){
        res.status(500).send({
            message: error.message || "Error Occured"
        });
    }  
};

/**
 *  GET /recipe/:id
 *  recipe
 */
exports.exploreRecipe = async(req, res) => {
    try{
        let recipeId = req.params.id;
        const recipe = await Recipe.findById(recipeId)
        res.render('recipe', {title: 'Cooking Blog - Recipe', recipe});
    }catch(error){
        res.status(500).send({message: error.message || 'Error Occured'});
    }
};


/**
 *  GET /categories/:id
 *  categoriesById
 */
exports.exploreCategoriesById = async(req, res) => {
    try{
        let categoryId = req.params.id;
        const categoryById = await Recipe.find({'category':categoryId});
        res.render('categoriesById', {title: 'Cooking Blog - Categories By Id', categoryById});
    }catch(error){
        res.status(500).send({message: error.message || 'Error Occured'});
    }
};



/**
 *  POST /search
 *  search
 */
exports.searchRecipe = async(req, res) => {
    try{
        let searchTerm = req.body.searchTerm;
        const recipeSearch = await Recipe.find({$text: {$search: searchTerm, $diacriticSensitive: true}});
        res.render('search', {title: 'Cooking Blog - Search', recipeSearch});
    }catch(error){
        res.status(500).send({message: error.message || 'Error Occured'});
    }
};

/**
 *  Get /explore-latest
 *  exploreLatest
 */
exports.exploreLatest = async(req, res) => {
    try{
        const limitNumber = 20;
        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        res.render('explore-latest', {title: 'Cooking Blog - Explore Latest', latest});
    }catch(error){
        res.status(500).send({message: error.message || 'Error Occured'});
    }
};

/**
 *  Get /explore-random
 *  exploreRandom as JSON
 */
exports.exploreRandom = async(req, res) => {
    try{
        const count = await Recipe.find().countDocuments();
        // console.log(count);
        // console.log(Math.random());
        let random = Math.floor(Math.random()* count);
        // console.log(random);
        let recipe = await Recipe.findOne().skip(random).exec();
        // res.json(recipe)
        res.render('explore-random', {title: 'Cooking Blog - Explore Random', recipe});
    }catch(error){
        res.status(500).send({message: error.message || 'Error Occured'});
    }
};


/**
 *  Post /submit-recipe
 *  
 */
exports.submitRecipe = async(req, res) => {
    try{
        res.render('submit-recipe', {title: 'Cooking Blog - Submit Recipe'});
    }catch(error){
        res.status(500).send({message: error.message || 'Error Occured'});
    }
};
/**
 *  GET /submit-recipe
 *  
 */
exports.submitRecipeOnPost = async(req, res) => {
    try{
        res.render('submit-recipe', {title: 'Cooking Blog - Submit Recipe'});
    }catch(error){
        res.status(500).send({message: error.message || 'Error Occured'});
    }
};


//! insert data to categories
// const dummyData =
//     [
//         {
//             "name": "Thai",
//             "image": "thai-food.jpg",
//         },
//         {
//             "name": "American",
//             "image": "american-food.jpg",
//         },
//         {
//             "name": "Chinese",
//             "image": "chinese-food.jpg",
//         },
//         {
//             "name": "Mexican",
//             "image": "mexican-food.jpg",
//         },
//         {
//             "name": "Indian",
//             "image": "indian-food.jpg",
//         },
//         {
//             "name": "Spanish",
//             "image": "spanish-food.jpg",
//         },
//     ];



// async function insertDummyCategoryData(){
//     try{
//         await Category.insertMany(dummyData);
//     }catch(error){
//         console.log('error',  + error);
//     }
// }

// insertDummyCategoryData();



//! insert data to Recipe
// const dummyData =
//     [
//         { 
            // "name": "Recipe One",
            // "description": `Recipe Description Goes Here`,
            // "email": "recipeemail@raddy.co.uk",
            // "ingredients": [
            //     "1 level teaspoon baking powder",
            //     "1 level teaspoon cayenne pepper",
            //     "1 level teaspoon hot smoked paprika",
            // ],
            // "category": "American", 
            // "image": "southern-friend-chicken.jpg"
//         },
//         { 
//             "name": "Recipe Two",
//             "description": `Recipe Description Goes Here`,
//             "email": "recipeemail@raddy.co.uk",
//             "ingredients": [
//                 "1 level teaspoon baking powder",
//                 "1 level teaspoon cayenne pepper",
//                 "1 level teaspoon hot smoked paprika",
//             ],
//             "category": "Thai", 
//             "image": "southern-friend-chicken.jpg"
//         },
//     ];

// async function insertDummyRecipeData(){
//     try{
//         await Recipe.insertMany(dummyData);
//     }catch(error){
//         console.log('error',  + error);
//     }
// }

// insertDummyRecipeData();















/*
//? 1 about pad into html
when rest render is we can pass the object from route,
and get the object using  : <%= typeof title != 'undefined' ? title: 'Cooking Blog - Made with Node.js'%>

*/