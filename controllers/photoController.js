const {Photo, User} = require('../models');

class PhotoController{
    static getTulisan(req,res){
        res.send('Hello World');
    }

    static getAllPhotos(req,res){
        Photo.findAll({
            include: User
        })
        .then(result => {
            res.status(200).json({
                message: "Menampilkan Data",
                data: result
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
    
    static getOne(req,res){
        let id = +req.params.id
        Photo.findByPk(id)
        .then(result => {
            res.status(200).json({
                message: "menamilkan data : ",
                data: result
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
    
    static createPhoto(req,res){
     const {title, caption, image_url} = req.body;
     const user = res.locals.user.id;
     Photo.create({
        title,
        caption,
        image_url,
        UserId: user
     })

     .then(result => {
        res.status(201).json({
            message: "Data berhasil di buat : ",
            data: result
        })
     })
     .catch(err => {
        res.status(500).json(err);
     })
    }

    static updatePhoto(req,res){
        let id = +req.params.id
        const {title,caption,image_url} = req.body;
        let data = {
            title,
            caption,
            image_url
        }
        Photo.update(
            data,
            {
                where: {
                    id
                },
                returning: true
            }
        )

        .then(result => {
            res.status(200).json({
                message: "Data berhasil di edit"
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
        
       }

    static deletePhotos(req,res){
        let id = +req.params.id;
        Photo.destroy({
            where: { 
                id 
            }
        })
        .then(result => {
            res.status(200).json({
                message: "Data berhasil di Hapus"
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }


}



module.exports = PhotoController;