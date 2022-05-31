// Problem 4
// Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
// Print the report card of the student (You can make it look nice by using some keyboard symbols )
// Explore ASCII ART (https://en.wikipedia.org/wiki/ASCII_art (Links to an external site.)) or Text Art (https://fsymbols.com/text-art/ (Links to an external site.)) for some inspiration

let name = "Abhijeet Ojha";
let school = "Madhusudan Sikshya Nivas";
let grade = 10;
let section = 'A';
let rollno = "067EK143";

let marMath = 79;
let marScience = 85;
let marEnglish = 89;

console.log("Student Details: \n");

console.log("Name       : " + name + "\n" + "School name: " + school + "\n" + "Grade      : " + grade + "\n" + "Section    : " + section + "\n" + "Rollno     : " + rollno + "\n");


console.log("Report Card:");
console.log("|---------------------------------|");
console.log("|" + "   SUBJECT    " + "   |  " + "   MARK      " + "|");
console.log("|---------------------------------|");
console.log("|" + "    Math      " + "   |  " + "    "+marMath+"       " + "|");
console.log("|---------------------------------|");
console.log("|" + "    Science   " + "   |  " + "    "+marScience+"       " + "|");
console.log("|---------------------------------|");
console.log("|" + "    English   " + "   |  " + "    "+marEnglish+"       " + "|");
console.log("|_________________________________|");
