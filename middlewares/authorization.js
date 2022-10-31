const { Photo } = require('../models');

async function authorizationPhoto(req,res,next){
    try {
        const AuthenticatedUser = res.locals.user;
        const one = await Photo.findOne({where: {id: req.params.id}});

        if(!one){
            res.status(400).json({
                message: "User tidak ada"
            })
        }
        
        if(one.UserId === AuthenticatedUser.id){
            next();
            res.status(200).json({
                message: "Menampilkan data photo",
                data: one
            })
        }else{
            res.status(404).json({
                message: "User tersebut tidak memiliki akses "
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
async function authorizationUpdateDelete(req,res,next){
    const AuthenticatedUser = res.locals.user;

    try {
        const foto = await Photo.findOne({
            where: {
                id: req.params.id
            }
        });

        if(!foto){
            return res.status(404).json({
                message: "Photo Not Found"
            });
        }

        if(foto.UserId === AuthenticatedUser.id){
            next();
        }else{
            res.status(404).json({
                message: "User dengan email tersebut tidak memiliki akses ke foto tersebut"
            })
        }

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }   
}

module.exports = {authorizationPhoto, authorizationUpdateDelete}