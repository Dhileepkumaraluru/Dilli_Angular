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
const highestScore = Math.max(...students.map((student) => student.score));
const topStudents = students.filter((student) => student.score === highestScore);
console.log(topStudents.map((student) => student.name)); 
