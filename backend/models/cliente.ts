import {DataTypes} from 'sequelize';
import db from '../database/connection';

const Cliente = db.define('cliente', {
    id_cli : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dni_cli : {
        type: DataTypes.STRING
    },
    nom_cli : {
        type: DataTypes.STRING
    },
    ape_cli : {
        type: DataTypes.STRING
    },
    direc_cli : {
        type: DataTypes.STRING
    },
    tel_cli : {
        type: DataTypes.STRING
    },
    email_cli : {
        type: DataTypes.STRING
    },
})


export default Cliente;