const router = require('express').Router();

const PhotoController = require('../controllers/photoController');

router.get('/tulisan', PhotoController.getTulisan);
router.get('/photos', PhotoController.getAllPhotos); 
router.get('/getOne/:id', PhotoController.getOne);
router.post('/photos/create', PhotoController.createPhoto);
router.delete('/delete/:id', PhotoController.deletePhotos);
router.put('/update/:id', PhotoController.updatePhoto);


module.exports = router;