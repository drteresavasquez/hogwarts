import studentData from '../../data/studentData';
import studentList from './studentList';

const createHouseButton = (house) => {

  return domString;
};

const buttonEventFunction = (e) => {
  const houseId = e.target.closest('button').id;
  const students = studentData.getStudents();
  const filterStudents = students.filter((student) => student.houseId === houseId);
  studentList.createStudentList(filterStudents);
};

export default { createHouseButton, buttonEventFunction };
