const express = require("express");
const router = require("./routers/indexRouter");
const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`bắt đầu chạy trên cổng ${port}`);
});

//set up sequelize
const { Student } = require("./model");
// 1) đồng bộ
Student.sync({ alter: true });
