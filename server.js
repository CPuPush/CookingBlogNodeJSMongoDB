const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 8080;

// middleware
require('dotenv').config();

app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/recipeRoutes.js');
app.use('/', routes);

app.listen(port, ()=>{
    console.log(`Listening to : ${port}`);
});









/*//*perspection by me
//!1. Penjelasan kenapa recipeController bisa mengakses index.ejs
pertama pada server.js dilakukan set layout dengan location file layouts/main dengan tujuan kita membutuhkan untuk 
mengatur //?main folder.
Kedua kita membuat main dan index.ejs dimana didalam body main, kita bisa memasukkan index.ejs, (include istilahnya)
yang terjadi adalah, didalam recipeController, kita merender index, dimana index tersebut sudah terdapat main yang
sudah di buat pada server.js
sehingga dengan sendirinya main diisi body oleh index.ejs.
*/