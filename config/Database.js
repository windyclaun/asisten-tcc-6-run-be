import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tcc-2", "root", "yourpassword", {
  host: "146.148.81.251",
  dialect: "mysql",
});

export default db;
