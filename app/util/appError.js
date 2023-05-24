const appError = (res, mes, statusCode) => {
    return res.status(statusCode).send({
        status: "fail",
        message: mes,
    });
};

module.exports = {
    appError,
};
