// Student Information Display Program
// Author: Eljie Peteros
// Date: April 7, 2026

// Student data object
const student = {
    name: "Eljie Peteros",
    course: "Web Development",
    yearLevel: "Midterm Project",
    favoriteProgrammingLanguage: "JavaScript"
};

// Function to display student information
function displayStudentInfo() {
    console.log("=====================================");
    console.log("        STUDENT INFORMATION");
    console.log("=====================================");
    console.log(`Name: ${student.name}`);
    console.log(`Course: ${student.course}`);
    console.log(`Year Level: ${student.yearLevel}`);
    console.log(`Favorite Programming Language: ${student.favoriteProgrammingLanguage}`);
    console.log("=====================================");
    console.log("Program executed successfully!");
}

// Execute the function
displayStudentInfo();