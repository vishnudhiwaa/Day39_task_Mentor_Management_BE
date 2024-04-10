
import StudentModel from "../modules/student.js";
import dotenv from "dotenv";
dotenv.config();

const getAllStudent = async (req, res) => {
  try {
    const student = await StudentModel.find();
    res.status(200).send({
      message: "Students Data Fetched Successfully",
      student,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
const getStudent = async (req, res) => {
  try {
    const student = await StudentModel.findOne({ _id: req.params.id });
    if (student) {
      const student = await StudentModel.findOne({ _id: req.params.id });
      res.status(200).send({
        message: "Fetched Successfully",
        student,
      });
    } else {
      res.status(400).send({
        message: "Invalid Student Id",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
//Add a new student
const addStudent = async (req, res) => {
  try {
    const student = await StudentModel.findOne({ email: req.body.email });

    if (!student) {
      let newstudent = await StudentModel.create(req.body);
      res.status(200).send({
        message: "student Added Successfully",
      });
    } else {
      res.status(400).send({
        message: `student with '${req.body.email}' already exists`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
//Delete a student
const deleteStudent = async (req, res) => {
  try {
    const student = await StudentModel.findById({ _id: req.params.id });
    if (student) {
      await StudentModel.deleteOne({ _id: req.params.id });
      res.status(200).send({
        message: "User Deleted Successfully",
      });
    } else {
      res.status(400).send({
        message: "Invalid User Id",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

const editStudent = async (req, res) => {
  try {
    const student = await StudentModel.findById({ _id: req.params.id });
    if (student) {
      const students = await StudentModel.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.status(200).send({
        message: "User Edite Successfully",
      });
    } else {
      res.status(400).send({
        message: "Invalid User Id",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

export default {
  getAllStudent,
  getStudent,
  addStudent,
  deleteStudent,
  editStudent,
};
