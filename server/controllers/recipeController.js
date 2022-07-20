/**
 *  GET /
 *  Homepage
 */
exports.homepage = async(req, res) => {
    res.render('index', {title : 'Homepage'});
};


/*
//? 1 about padd into html
when rest render is we can pass the object from route,
and get the object using  : <%= typeof title != 'undefined' ? title: 'Cooking Blog - Made with Node.js'%>

*/