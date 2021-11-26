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


/* Get Page Ajout d'Annonce */

router.get('/ajout_annonce', function(req, res){
  var db = req.db;
  var collection = db.get('collection_voiture');
   collection.find({}, {}, function(e, docs){
    res.render('ajout_annonce', {
      "voiture" : docs
    });
  });
});

/* POST Page Ajout d'Annonce */

router.post('/ajout_annonce',function(req,res)
{
  //set database variables
  var db=req.db;
  var marque = req.body.marque;
  var image = req.body.image;
  var prix = req.body.prix;
  var modele = req.body.modele;
  var annee = req.body.annee;
  var kilometrage = req.body.kilometrage;
  var color = req.body.color;
  var categorie = req.body.categorie;
  var description = req.body.description;
  var collection = db.get('collection_voiture');
  //soumettre au db 
  collection.insert({"marque" : marque,"image" : image,"prix" : prix,"modele" : modele,"annee" : annee,"kilometrage" : kilometrage,"color" : color,"categorie" : categorie,"description" : description}) 
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

/* POST Page modification Profile*/
router.post('/modification_profile',function(req,res)
{
  //set database variables
  var db=req.db;
  var motdepasse = req.body.motdepasse;
  var collection = db.get('collection_admin');
  //soumettre au db 
  collection.update({},{$set:{"motdepasse":motdepasse}},{multi:true})  
})

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

/* GET Page details d'annonce*/
router.get('/details_annonce', function(req, res){
  var db = req.db;
  var collection = db.get('collection_voiture');
   collection.find({}, {}, function(e, docs){
    res.render('details_annonce', {
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
