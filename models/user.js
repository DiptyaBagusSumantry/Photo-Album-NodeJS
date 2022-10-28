'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Photo)
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: {
          args:true,
          msg: "Format Email Salah"
        }
      }
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user,opt) =>{
        const hashedPassword = hashPassword(user.password);

        user.password = hashedPassword;
      }
    }
  });
  return User;
};