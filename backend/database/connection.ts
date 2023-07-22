import {Sequelize } from 'sequelize';

const db = new Sequelize("concesionaria", "root", "root" , {
    host: "localhost",
    dialect: "mysql",
    logging: true,  

    define:{
        freezeTableName: true,
        timestamps: false,
    }
})

export default db;