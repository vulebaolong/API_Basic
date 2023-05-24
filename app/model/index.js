const { Sequelize } = require("sequelize");
const { DB, USER, PASSWORD, HOST, dialect } = require("../config/config");
const { createStudentModel } = require("./studentModel");
const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect,
});

const checkConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log("kết nối mysql thành công");
    } catch (error) {
        console.log("👙  error: ", error);
    }
};
checkConnect();

const Student = createStudentModel(sequelize);

module.exports = {
    Student,
};
