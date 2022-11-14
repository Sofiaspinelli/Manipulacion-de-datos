const express = require('express');
const router = express.Router();
const {list, recomended,detail,add,create,edit,update,destroy, nuevo,deleteMovie } = require('../controllers/moviesController');

const movieValidation = require('../validations/createMovie')

router.get('/', list);
router.get('/new', nuevo);
router.get('/recommended', recomended);
router.get('/detail/:id', detail);


//Rutas exigidas para la creación del CRUD
router.get('/add', add);
router.post('/create',movieValidation, create);
router.get('/edit/:id', edit);
router.put('/update/:id', update);
router.get('/delete/:id', deleteMovie);
router.delete('/delete/:id', destroy);

module.exports = router;