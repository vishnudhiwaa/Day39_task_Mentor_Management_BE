
const homePage = (req, res) => {
    res.status(200).send(`<h1 style = "text-align:center; ">Web Developer Task</h1>
    <h2 style = "text-align:center; ">Student Mentor Database Management</h2>
      <h2>Mentor</h2>
      <ul>
  
  <li>GET Get All Mentors = https://student-mentor-management-rhq8.onrender.com/mentors</li>
  <li>POST Add New Mentor = https://student-mentor-management-rhq8.onrender.com/mentors</li>
  <li>DELETE Delete Mentor = https://student-mentor-management-rhq8.onrender.com/mentors/:id</li>
  <li>GET Mentor Student List = https://student-mentor-management-rhq8.onrender.com/mentors/students/:mentor_id</li>
  <li>PUT Edit Mentor = https://student-mentor-management-rhq8.onrender.com/mentors/:id</li>
  <li>GET Get One Mentor = https://student-mentor-management-rhq8.onrender.com/mentors/:id</li>
  
      </ul>
  
      <h2>Student</h2>
  
      <ul>
  
      <li>GET Get All Student = https://student-mentor-management-rhq8.onrender.com/student</li>
      <li>POST Add New Student = https://student-mentor-management-rhq8.onrender.com/student</li>
      <li>DELETE Delete Student = https://student-mentor-management-rhq8.onrender.com/student/:id</li>
      <li>GET Get One Student = https://student-mentor-management-rhq8.onrender.com/student/:id</li>
      <li>PUT Edit Student = https://student-mentor-management-rhq8.onrender.com/student/:id</li>
  
      </ul>
  
      <h2>Assign</h2>
  
      <ul>
      <li>POST Assign multiple Student = https://student-mentor-management-rhq8.onrender.com/assign/student/:batch/mentor/:mentor_id</li>
      </ul>
  
      `);
  };
  
  export default { homePage };
  