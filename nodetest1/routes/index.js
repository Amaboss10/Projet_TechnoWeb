var express = require('express');
const { id } = require('monk');
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


/////////////////////////////////////// GET CATEGORIES ///////////////////////////////////////////
/* GET Page categorie 1*/
router.get('/categories/categorie_1', function(req, res){
  var db = req.db;
  var collection = db.get('collection_voiture');
   collection.find({}, {}, function(e, docs){
    res.render('./categories/categorie_1', {
      "voiture" : docs
    });
  });
});


/* GET Page categorie 2*/
router.get('/categories/categorie_2', function(req, res){
  var db = req.db;
  var collection = db.get('collection_voiture');
   collection.find({}, {}, function(e, docs){
    res.render('./categories/categorie_2', {
      "voiture" : docs
    });
  });
});
/* GET Page categorie 3*/
router.get('/categories/categorie_3', function(req, res){
  var db = req.db;
  var collection = db.get('collection_voiture');
   collection.find({}, {}, function(e, docs){
    res.render('./categories/categorie_3', {
      "voiture" : docs
    });
  });
});
/* GET Page categorie 4*/
router.get('/categories/categorie_4', function(req, res){
  var db = req.db;
  var collection = db.get('collection_voiture');
   collection.find({}, {}, function(e, docs){
    res.render('./categories/categorie_4', {
      "voiture" : docs
    });
  });
});
/* GET Page categorie 5*/
router.get('/categories/categorie_5', function(req, res){
  var db = req.db;
  var collection = db.get('collection_voiture');
   collection.find({}, {}, function(e, docs){
    res.render('./categories/categorie_5', {
      "voiture" : docs
    });
  });
});
/* GET Page categorie 6*/
router.get('/categories/categorie_6', function(req, res){
  var db = req.db;
  var collection = db.get('collection_voiture');
   collection.find({}, {}, function(e, docs){
    res.render('./categories/categorie_6', {
      "voiture" : docs
    });
  });
});

//////////////////////////////////////// TRIE //////////////////////////////////////////////////

/* GET Page trie croissant*/
router.get('/trie_croissant', function(req, res){
  var db = req.db;
  var collection = db.get('collection_voiture');
   collection.find({}, {}, function(e, docs){
    res.render('trie_croissant', {
      "voiture" : docs
    });
  });
});

/* GET Page trie decroissant 6*/
router.get('/trie_decroissant', function(req, res){
  var db = req.db;
  var collection = db.get('collection_voiture');
   collection.find({}, {}, function(e, docs){
    res.render('trie_decroissant', {
      "voiture" : docs
    });
  });
});


/* GET Page details annonce*/
router.get('/details_annonce/:id', function(req, res){
  var db = req.db;
  console.log(req.params.id);
  var collection = db.get('collection_voiture');
  collection.findOne({ _id: req.params.id})
  .then(data => {
  res.render('details_annonce', { voiture: data })})
  .catch(err => res.json(err))
});

/* GET Page suppression annonce*/
router.get('/suppression_annonce/:id', function(req, res){
  var db = req.db;
  console.log(req.params.id);
  var collection = db.get('collection_voiture');
  collection.remove({ _id: req.params.id},{justOne:true})
  .catch(err => res.json(err))
  res.redirect('/gestion_annonce')
});


/* GET Page modification annonce*/
router.get('/modification_annonce/:id', function(req, res){
  var db = req.db;
  console.log(req.params.id);
  var collection = db.get('collection_voiture');
  collection.findOne({ _id: req.params.id})
  .then(data => {
  res.render('modification_annonce', { voiture: data })})
  .catch(err => res.json(err))
});

/* POST Page modification d'Annonce 2 */

router.post('/modification_annonce/:id',function(req,res)
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
  collection.update({_id:req.params.id},{$set:
  {"marque" : marque,
  "image" : image,
  "prix" : prix,
  "modele" : modele,
  "annee" : annee,
  "kilometrage" : kilometrage,
  "color" : color,
  "categorie" : categorie,
  "description" : description}
})
  .catch(err => res.json(err))
  res.redirect('/gestion_annonce')
})

/* GET Page paiement */
router.get('/paiement/:id', function(req, res){
  var db = req.db;
  console.log(req.params.id);
  var collection = db.get('collection_voiture');
  collection.findOne({ _id: req.params.id})
  .then(data => {
  res.render('paiement', { voiture: data })})
  .catch(err => res.json(err))
});


module.exports = router;
