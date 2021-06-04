import { Model, DataTypes } from 'sequelize';
import connect from "../utils/mysql";

class User extends  Model{
    public user_id !: number;
    public user_name !: string;
    public user_passWord !: string;
    public user_address !: string | null;
    public user_status !: string | null;
    public create_date !: string | null
}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        user_Name : {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        user_passWord: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        user_address: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
        user_status: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
        create_date: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
    },
    {
        tableName: 'user',
        sequelize: connect, // passing the `sequelize` instance is required
    },
);

export  default  User