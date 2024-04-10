
import Mentor from "../modules/mentor.js";
import Student from "../modules/student.js";

//Each student is assigned with Mentor
const assignMultipleStudent = async (req, res) => {
  try {
    const mentor = await Mentor.findOne({ _id: req.params.mentor_id });
    const students = await Student.find({ batch: req.params.batch });
    if (!mentor) {
      res.send({
        message: "Mentor id is not valid",
      });
    }
    if (mentor) {
      //Each student is assigned with Mentor
      let student_id = students.map((e) => e._id.valueOf());
      await Student.updateMany(
        { batch: req.params.batch },
        { mentor: req.params.mentor_id }
      );
      //Update Mentor
      let filter = { _id: req.params.mentor_id };
      let update = { students: student_id };
      await Mentor.updateOne(filter, update);
      res.status(200).send({ message: "Students add successfully" });
    }
  } catch (error) {}
};

export default { assignMultipleStudent };
