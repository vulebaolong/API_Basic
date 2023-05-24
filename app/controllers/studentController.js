const studentServices = require("../services/studentServices");
const { appError } = require("../util/appError");

exports.getAllStudent = async (req, res) => {
    const listStudents = await studentServices.getList();
    if (!listStudents) {
        return appError(res, "Lấy danh sách thất bại", 404);
    }
    res.status(200).send({
        status: "sucess",
        data: listStudents,
    });
};

exports.getStudent = async (req, res) => {
    const id = +req.params.id;
    const student = await studentServices.getOne(id);
    if (!student) {
        return appError(res, "Không tìm thấy", 404);
    }

    res.status(200).send({
        status: "sucess",
        data: student,
    });
};

exports.createStudent = async (req, res) => {
    const newStudent = await studentServices.create(req.body);

    if (!newStudent) {
        return appError(res, "Tạo sinh viên không thành công", 404);
    }

    res.status(200).send({
        status: "sucess",
        data: newStudent,
        message: `thêm học sinh thành công`,
    });
};

exports.updateStudent = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const studentUpdate = await studentServices.update(id, data);
    if (!studentUpdate) {
        return appError(res, "Cập nhật không thành công", 404);
    }

    res.status(200).send({
        status: "sucess",
        data: studentUpdate,
    });
};

exports.deleteStudent = async (req, res) => {
    const id = req.params.id;
    const studentDelete = await studentServices.deletes(id);
    if (!studentDelete) {
        return appError(res, "Xóa không thành công", 404);
    }

    res.status(200).send({
        status: "sucess",
    });
};
