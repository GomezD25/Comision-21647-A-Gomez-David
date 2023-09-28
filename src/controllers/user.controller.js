
const Post =require("../models/user.models");


const userCtrl={}
//crud
//controlador para obtener todos los usuarios

userCtrl.getAllPost= async (req, res)=>{
   
    const posts= await Post.findAll();

    
    res.render("post",{result:posts});
}

userCtrl.indexNuevoPost=(req, res)=>{
    res.render("nuevopost");
}
//controlador para crear usuario

userCtrl.createPost= async(req,res)=>{
    const {username, image, tituloTema, posteo}= req.body;
    
    //const user={
    const post={
        username: username,
        image: image,
        tituloTema: tituloTema,
        posteo: posteo,
    };
    try{
        const nuevoPost= await Post.create(post);
        
        //res.redirect("/user");
          res.redirect("/post");
       
    }catch  (error){
        res.status(400).send({message:"Error en la carga de usuario"});
    };
    

   

};

//controlador para eliminar post

userCtrl.deletePost = async(req,res)=>{
    const{id}= req.params
    try{ 
        
        const deletePost= await Post.destroy({
        where:{
            id:id
        }
    });
    
    if(deletePost){
        
        return res.redirect("/post");

    }else{
        return res.status(400).send({mensaje:"no se encuentra al usuario para eliminar"})
    }
    
    }catch (error){
        return res.status(400).send({mensaje: "Eror al eliminar el usuario"});
    }
   
};
//controlador para renderizar y editar
userCtrl.indexEditPost= async(req,res)=>{
    const {id}= req.params;
    
    const post= await Post.findOne({where:{id:id}})
    
    res.render("EditPost",{result: post});
};

//controlador para editar tema


userCtrl.editPost= async(req,res)=>{


   
    const{id,username,image,tituloTema,posteo}=req.body;
    //buscar usuario
   
        const updatePost = {
            username: username,
            image: image,
            tituloTema:tituloTema,
            posteo: posteo,

        }
        try {
            
            const postAfterEdit= await Post.update(updatePost,{
                where: {id:id,},
            });
           
            return res.redirect("/post");
          

            
        } catch (error) {
            return res.status(400).send({mensaje:"Error al actualizar"});
            
        }
        
    }
    
      




module.exports = {userCtrl}