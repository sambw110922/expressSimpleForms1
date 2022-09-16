var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//  ---------------------------

//  first form 
router.get("/firstform", function(req, res){
  res.render("firstform");
});

//  first form processing
router.get("/firstform_processing", function(req, res){
  
  var d = {
    "message" : "DEFAULT"
  };

  // answer from
  // https://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-express-js-on-node-js?noredirect=1&lq=1
  
  //  see also
  //https://stackoverflow.com/questions/18524125/req-query-and-req-param-in-expressjs

  if(req.query.txtMessage){
    d.message = req.query.txtMessage;
  } else {
    d.message = "none sent";
  }
  

  res.render("firstformresults", { formdata : d });

});

//  =====================


router.get("/secondform", function(req, res){
  res.render("secondform");
});


router.post("/secondform_processing", function(req, res){
  
  var d = {
    "message" : "DEFAULT"
  };

  //  for posts, use req.body

  if(req.body.txtMessage){
    d.message = req.body.txtMessage;
  } else {
    d.message = "NONE GIVEN";
  }
  

  res.render("secondformresults", { formdata : d });

});

module.exports = router;
