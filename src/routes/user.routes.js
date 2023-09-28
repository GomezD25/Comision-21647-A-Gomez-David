const userRoutes = require("express").Router();
const{userCtrl} =require("../controllers/user.controller")

//crud
//lee todos los usuarios de la BD
//*userRoutes.get("/user",userCtrl.getAllUsers);

userRoutes.get("/post",userCtrl.getAllPost); 

userRoutes.get("/nuevopost",userCtrl.indexNuevoPost)
//Crear tema nuevo

userRoutes.post("/savePost",userCtrl.createPost);



//elliminar post

userRoutes.get("/deletePost/:id", userCtrl.deletePost);


//renderizar editpost
userRoutes.get("/EditPost/:id", userCtrl.indexEditPost);


//editar tema

userRoutes.post("/updatePost", userCtrl.editPost);


//renderizar index
userRoutes.get("/",(req, res)=>{
   res.render("index")
});


module.exports= userRoutes;