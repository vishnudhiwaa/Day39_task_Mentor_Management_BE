
import MentorModel from "../modules/mentor.js";
import StudentModel from "../modules/student.js";
import dotenv from "dotenv";
dotenv.config();

const allMentor = async (req, res) => {
  try {
    const mentor = await MentorModel.find();
    res.status(200).send({
      message: "Mentors Data Fetched Successfully",
      mentor,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

//Add a New Mentor
const addMentor = async (req, res) => {
  try {
    const user = await MentorModel.findOne({ email: req.body.email });

    if (!user) {
      let newMentor = await MentorModel.create(req.body);
      res.status(200).send({
        message: "Mentor Added Successfully",
      });
    } else {
      res.status(400).send({
        message: `Mentor with '${req.body.email}' already exists`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//Delete a Mentor
const deleteMentor = async (req, res) => {
  try {
    const user = MentorModel.findOne({ _id: req.params.id });
    if (user) {
      await MentorModel.deleteOne({ _id: req.params.id });
      res.status(200).send({
        message: "Mentor Deleted Successfully",
      });
    } else {
      res.status(400).send({
        message: "Invalid Mentor Id",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
//Write API to show all students for a particular mentor

const mentorStudentList = async (req, res) => {
  try {
    const mentor = await MentorModel.findOne(
      { _id: req.params.id },
      { _id: 0 }
    );
    const students = await StudentModel.find({ mentor: req.params.id });
    if (mentor) {
      res.status(200).send({
        message: "Fetched Students List Successfully",
        mentor,
        students,
      });
    } else {
      res.status(400).send({
        message: "Mentor Id Not Valid",
      });
    }
  } catch (error) {}
};

const addBatch = async (req, res) => {
  try {
    const id = req.params.id;
    const batch = req.params.batch;
    const findBatch = await MentorModel.findOne({ batch: { $all: [batch] } });
    if (!findBatch) {
      res.status(200).send({
        message: "updated",
      });
    } else {
      res.status(400).send({
        message: `Batch with ${batch} already exists`,
      });
    }

    await MentorModel.updateOne(
      { _id: req.params.id },
      { $push: { batch: batchs } }
    );

    // console.log(id, batch);
  } catch (error) {
    res.status(500).send({
      message: "Internal server Error",
    });
  }
};

const editMentor = async (req, res) => {
  try {
    let mentor = await MentorModel.find({ _id: req.params.id });
    if (mentor) {
      await MentorModel.updateOne({ _id: req.params.id }, { $set: req.body });
      res.status(200).send({
        message: "update mentor",
      });
    } else {
      res.status(400).send({
        message: "Invalid mento id",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server Error",
    });
  }
};

const getOneMentor = async (req, res) => {
  try {
    const mentors = MentorModel.findOne({ _id: req.params.id });
    if (mentors) {
      const mentor = await MentorModel.findOne({ _id: req.params.id });
      res.status(200).send({
        message: "Mentor data fetched Successfully",
        mentor,
      });
    } else {
      res.status(400).send({
        message: "Invalid Mentor Id",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

export default {
  allMentor,
  addMentor,
  deleteMentor,
  mentorStudentList,
  addBatch,
  editMentor,
  getOneMentor,
};
