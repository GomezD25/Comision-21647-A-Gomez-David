const { DataTypes } = require('sequelize');
const {sequelize }= require("../database/db");

//const User = sequelize.define('User', {
const Post = sequelize.define('Post', {
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING(2000),
    allowNull: false
  },
  tituloTema: {
    type: DataTypes.STRING,
    allowNull: false
  },
  posteo: {
     type: DataTypes.STRING(2000),
     allowNull: false
 },
 
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User);
console.log(Post === sequelize.models.Post); // true
//User.sync();
Post.sync();
module.exports = Post;