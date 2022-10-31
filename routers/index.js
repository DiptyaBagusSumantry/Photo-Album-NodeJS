const router = require('express').Router();

const PhotoController = require('../controllers/photoController');
const UserController = require('../controllers/UserController');
const authentication = require('../middlewares/authentication');
const {authorizationPhoto, authorizationUpdateDelete} = require('../middlewares/authorization')


router.get('/tulisan', PhotoController.getTulisan);

//Users
router.post('/user/create', UserController.register);
router.post('/user/login', UserController.login);

router.use(authentication)

//Photos
router.post('/photos/create', PhotoController.createPhoto);
router.get('/photos', PhotoController.getAllPhotos); 
router.get('/getOne/:id', authorizationPhoto);
router.use('/update/:id', authorizationUpdateDelete);
router.put('/update/:id', PhotoController.updatePhoto);
router.use('/delete/:id', authorizationUpdateDelete);
router.delete('/delete/:id', PhotoController.deletePhotos);

module.exports = router;