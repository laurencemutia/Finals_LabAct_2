let studentNames = [
    "Stebs",
    "Hokage",
    "Rald",
    "Ferds",
    "Json"
];

function displayStudents() {
    let studentCount = studentNames.length;
    document.getElementById("studentList").innerHTML = "<span>Student Names:</span> <br>" + studentNames;
    document.getElementById("studentCount").textContent = studentCount;
}

displayStudents();

function addStudent(arr, studentName) { arr.push(studentName); }
function removeStudent(arr){ arr.pop(); }
function findStudent(arr, index){ return arr.at(index) }

function pushStudent(){
    const studentName = document.getElementById("studentInput").value;

    if(studentName === null || studentName.trim() === ""){ return; }
    addStudent(studentNames, studentName);
    displayStudents();
}

function popStudent() {
    removeStudent(studentNames);
    displayStudents();
}

function findIndex(){
    const indexInput = document.getElementById("indexInput").value;
    const result = document.getElementById("findResult");
    let studentCount = studentNames.length;

    console.log(typeof indexInput);

    let indexInputToNum = parseInt(indexInput);

    console.log(typeof indexInputToNum);

    if(indexInput === null || indexInput.trim() === "") {
        result.textContent = "Invalid index. Please try again"
        return;
    }
    else if(indexInputToNum >= studentCount){
        result.textContent = "Student not found";
        return;
    }
    else {
        result.textContent = findStudent(studentNames, indexInput);
    }
}