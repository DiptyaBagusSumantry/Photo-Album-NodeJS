const {User} = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const {generateToken} = require('../helpers/jwt')

class UserController{
    static async register(req,res){
        const {email,password,username}=req.body;
        try {

            const cekEmail = await User.findOne({
                where: {email}
            });

            const cekUsername = await User.findOne({
                where: {username}
            });

            if(cekEmail){
                res.status(400).json({
                    message: `${email},  Email tersbut sudah ada`
                })
            }else if(cekUsername){
                res.status(400).json({
                    message: `${username}, username tersebut sudah ada`
                })
            }else{

                const user = await User.create({
                    email,
                    password,
                    username
                });
                res.status(201).json({
                    message: `User dengan email ${email} berhasil di buat`,
                    data: user
                })

            }

        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async login(req,res){
        const {email, password} = req.body;
        try{
            const data = await User.findOne({
                where: {email}
            });

            if(data){
                const correct = comparePassword(password, data.password);
                if(correct){
                    const token = generateToken({
                        id: data.id,
                        email: data.email
                    });
                    res.status(200).json({message: "Selamat anda berhasil Login", token});
                }else{
                    res.status(401).json({
                        message: "Password Salah"
                    })
                }
            } else{
                res.status(401).json({
                    message: `User dengan email ${email} tidak ada`
                });
            }
        }catch(err){
            res.status(404).json({
                message: err.message
            })
        }
    }
}

module.exports = UserController