let studentNames = [
    "Stebs",
    "Hokage",
    "Rald",
    "Ferds",
    "Json"
];


function addStudent(arr, studentName) {
    arr.push(studentName);
}

function removeStudent(arr) {
    arr.pop();
}

function findStudent(arr, index) {
    return arr.at(index);
}

function joinStudents(arr) {
    return arr.join(", ");
}

function stringifyStudents(arr) {
    return arr.toString();
}

function printStudentByNum(students) {
     let listHtml = "<ol>";

    for (let i = 0; i < students.length; i++) {
        listHtml += "<li>" + students[i] + "</li>";
    }

    listHtml += "</ol>";
    return listHtml;
}

// Display students
function displayStudents() {
    const studentCount = studentNames.length;

    document.getElementById("studentCount").textContent = studentCount;

    if (studentCount === 0) {
        document.getElementById("studentList").innerHTML = "No students in the list.";
    } else {
        document.getElementById("studentList").innerHTML = "<span>Student Names:</span> <br>" + printStudentByNum(studentNames);
    }
}

// Add Student 
function pushStudent() {
    const input = document.getElementById("studentInput");
    const studentName = input.value;

    if (studentName.trim() === "") {
        return;
    }

    addStudent(studentNames, studentName);
    input.value = "";
    displayStudents();
}

// Remove Last 
function popStudent() {
    removeStudent(studentNames);
    displayStudents();
}

// Find students by Index
function findIndex() {
    const indexValue = document.getElementById("indexInput").value;
    const result = document.getElementById("findResult");

    if (indexValue.trim() === "") {
        result.textContent = "Invalid index. Please try again";
        return;
    }

    const index = parseInt(indexValue);
    const student = findStudent(studentNames, index);

    if (student === undefined) {
        result.textContent = "Student not found";
    } else {
        result.textContent = student;
    }
}

// show current students on page load
displayStudents();