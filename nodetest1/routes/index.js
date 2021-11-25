var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get Hello World page */
router.get('/helloworld', function (req, res ){
  res.render('helloworld', {title: 'Hello, World! '});
})

/* GET Page Accueil page*/
router.get('/accueil', function(req, res){
  var db = req.db;
  var collection = db.get('collection_voiture');
   collection.find({}, {}, function(e, docs){
    res.render('accueil', {
      "voiture" : docs
    });
  });
});

module.exports = router;
