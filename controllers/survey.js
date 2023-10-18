const surveyData = require("../routes/survey");
const Product = require("../models/product");


exports.getSurvey = ( req, res, next) => {
    res.render( 'survey', {
            from: 'survey'
        })
}
exports.getAbout = ( req, res, next) => {
    res.render( 'about', {
            from: 'about'
        })
}
exports.submitSurvey = ( req, res, next) => {
    let q1 = req.body.q1;
    let q2 = req.body.q2;
    let q3 = req.body.q3;
    let q4 = req.body.q4;
    let q5 = req.body.q5;
    let q6 = req.body.q6;
    let q7 = req.body.q7;
    let q8 = req.body.q8;
    let q9 = req.body.q9;

    // let t = req.body.title;
    // let a = req.body.author;
    // let p = req.body.price
    // const product = new Product( t, a, p );
    // product.save();
    // // products.push({
    // //     title: t,
    // //     author: a,
    // //     price: p
    // // })
    // res.redirect('/surveyResults')
}