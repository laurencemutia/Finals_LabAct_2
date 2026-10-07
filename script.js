let studentNames = [
    "Stebs",
    "Hokage",
    "Rald",
    "Ferds",
    "Json"
];

function displayStudents() {
    let studentCount = studentNames.length;
    document.getElementById("studentList").innerHTML = "<b>Student Names:</b> <br>" + studentNames;

    document.getElementById("studentCount").textContent = studentCount;
}
displayStudents();