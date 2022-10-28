const router = require('express').Router();

const PhotoController = require('../controllers/photoController');
const UserController = require('../controllers/UserController');
const authentication = require('../middlewares/authentication');


router.get('/tulisan', PhotoController.getTulisan);

//Users
router.post('/user/create', UserController.register);
router.post('/user/login', UserController.login);

router.use(authentication)

//Photos
router.post('/photos/create', PhotoController.createPhoto);
router.get('/photos', PhotoController.getAllPhotos); 
router.get('/getOne/:id', PhotoController.getOne);
router.put('/update/:id', PhotoController.updatePhoto);
router.delete('/delete/:id', PhotoController.deletePhotos);


module.exports = router;