const {Sequelize} = require('sequelize');

const dbname= process.env.DB_NAME;
const dbuser= process.env.DB_USER;
const dbpass= process.env.DB_PASS;
const dbhost= process.env.DB_HOST;
const dbdialect= process.env.DB_DIALECT;
const dbport= process.env.DB_PORT;


const sequelize = new Sequelize(dbname, dbuser, dbpass, {
    host: dbhost,
    dialect: dbdialect,
  });

  const TestConnection = async ()=>{
  try {
    await sequelize.authenticate();
    console.log('conexion a la BD exitosa');
  } catch (error) {
    console.error('No se pudo conectar a la BD:', error);
  }
}
module.exports= {sequelize, TestConnection};