import { Sequelize } from "sequelize";

const db = new Sequelize('rifsa-dummy','root','rifsa123',{
    host: "34.101.143.232",
    dialect: "mysql"
})

export default db;