class Student {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
  }
  const students = [
    new Student("dilli", 75),
    new Student("vijay", 82),
    new Student("hemanth", 90),
    new Student("meghana",99)];
const passedStudents = students.filter((student) => student.score > 70);
  console.log(passedStudents.map((student) => student.name)); 