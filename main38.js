let mathGrade = Number(prompt("Enter your maths exam score."));
let englishGrade = Number(prompt("Enter your English exam score."));
let biologyGrade = Number(prompt("Enter your biology exam score."));
let sum = mathGrade + englishGrade + biologyGrade;
let isFinalExam = confirm("Is this the final exam?");
let gradeA = "";
if (isFinalExam) {
    gradeA = sum >= 90 && sum <= 100;
} else {
    gradeA = sum >= 89 && sum <= 100;
}
console.log(gradeA);
