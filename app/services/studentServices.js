const { Student } = require("../model");

const getList = async () => {
    const studentList = await Student.findAll();
    if (studentList) return studentList;
    if (!studentList) return false;
};
const getOne = async (id) => {
    const student = await Student.findOne({
        where: {
            id,
        },
    });
    if (!student) return false;
    if (student) return student;
};
const create = async (data) => {
    const newStudent = await Student.create(data);
    return newStudent;
};
const update = async (id, data) => {
    const dataStudent = await getOne(id);
    const { dataValues: studentUpdate } = dataStudent;
    if (!studentUpdate) return false;
    // console.log("trước: ", studentUpdate);
    Object.keys(data).forEach((key) => {
        if (key in studentUpdate) {
            studentUpdate[key] = data[key];
        }
    });
    // console.log("sau: ", studentUpdate);

    const studentUpdated = dataStudent.save();
    return studentUpdated;
};
const deletes = async (id) => {
    const student = await Student.destroy({
        where: {
            id,
        },
    });
    console.log(student);
    if (student === 0) return false;
    if (student !== 0) return true;
};

module.exports = {
    getList,
    getOne,
    create,
    update,
    deletes,
};

// const create = async (data) => {
//     const id = Math.random();
//     const student = {
//         id,
//         ...data,
//     };
//     listStudents = [...listStudents, student];

//     const index = listStudents.findIndex((item) => {
//         return item.id === student.id;
//     });

//     if (index === -1) {
//         return false;
//     }
//     return listStudents[index];
// };
// const getList = () => {
//     if (listStudents) {
//         return listStudents;
//     }
//     if (!listStudents) {
//         return false;
//     }
// };
// const getOne = (id) => {
//     const index = listStudents.findIndex((item) => {
//         return item.id === +id;
//     });

//     if (index === -1) {
//         return false;
//     }
//     return listStudents[index];
// };
// const update = (id, data) => {
//     const index = listStudents.findIndex((item) => {
//         return item.id === +id;
//     });

//     if (index === -1) {
//         return false;
//     }

//     const studentOld = listStudents[index];
//     const studentUpdate = {
//         ...studentOld,
//         ...data,
//     };
//     listStudents[index] = studentUpdate;
//     return listStudents[index];
// };
// const deletes = (id) => {
//     const index = listStudents.findIndex((item) => {
//         return item.id === +id;
//     });

//     if (index === -1) {
//         return false;
//     }

//     const result = listStudents.splice(index, 1);

//     if (result === []) {
//         return false;
//     }

//     return result[0];
// };
