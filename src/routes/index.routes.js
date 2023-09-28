const indexRoutes= require("express").Router()

//Renderizar index
indexRoutes.get("/",(req,res)=>{
    res.render("index");
});
module.exports= indexRoutes;
