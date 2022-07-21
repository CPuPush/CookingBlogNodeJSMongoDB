require('../models/database');
// collection
const Category = require('../models/Category');
/**
 *  GET /
 *  Homepage
 */
exports.homepage = async(req, res) => {

    try{
        const limitNumber = 5;
        const categories = await Category.find({
        }).limit(limitNumber);


        res.render('index', {title : 'Homepage', categories});
    }catch(error){
        res.status(500).send({
            message: error.message || "Error Occured"
        });
    }  
};
exports.exploreCategories = async(req, res) => {

    try{
        const limitNumber = 5;
        const categories = await Category.find({
        }).limit(limitNumber);


        res.render('categories', {title : 'Categories', categories});
    }catch(error){
        res.status(500).send({
            message: error.message || "Error Occured"
        });
    }  
};














// insert data
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















/*
//? 1 about pad into html
when rest render is we can pass the object from route,
and get the object using  : <%= typeof title != 'undefined' ? title: 'Cooking Blog - Made with Node.js'%>

*/