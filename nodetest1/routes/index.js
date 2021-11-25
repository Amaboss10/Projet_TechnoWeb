var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get Page A Propos */
router.get('/a_propos', function (req, res ){
  res.render('a_propos', {title: '/'});
})


/* GET Page modification Profile*/
router.get('/modification_profile', function(req, res){
  var db = req.db;
  var collection = db.get('collection_admin');
   collection.find({}, {}, function(e, docs){
    res.render('modification_profile', {
      "admin" : docs
    });
  });
});


/* GET Page gestion d'annonce*/
router.get('/gestion_annonce', function(req, res){
  var db = req.db;
  var collection = db.get('collection_voiture');
   collection.find({}, {}, function(e, docs){
    res.render('gestion_annonce', {
      "voiture" : docs
    });
  });
});


/* GET Page Accueil*/
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
