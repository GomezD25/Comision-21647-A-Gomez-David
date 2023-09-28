const express = require("express");
const dotenv= require("dotenv")
dotenv.config()
const {TestConnection}= require("./database/db");
const userRoutes= require("./routes/user.routes");
const morgan = require("morgan");
const path= require("node:path");
const app = express();
const PORT= process.env.PORT|| 5000;
const indexRoutes= require("./routes/index.routes");
const helmet= require('helmet');
//app.get("/", (req , res)=>{
    
//});
//Middlewares
app.use(helmet({ crossOriginEmbedderPolicy: false, originAgentCluster: true }));
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https: data: blob:"],
    },
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"public")));
//config para motor de plantilla
app.set("view engine","ejs");



app.set("views", path.join(__dirname,"views"));
//Test de conexion
TestConnection();
app.use(indexRoutes);
app.use(userRoutes);
app.listen(PORT,()=>
    console.log(`servidor corriendo y escuchando en el puerto ${PORT}`)
);