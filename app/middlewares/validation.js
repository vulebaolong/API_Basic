const { appError } = require("../util/appError");

const checkEmty = (req, res, next) => {
    const { fullName, age } = req.body;
    if (fullName && age) {
        next();
    } else {
        appError(res, "Không được để trống", 400);
    }
};

module.exports = { checkEmty };
