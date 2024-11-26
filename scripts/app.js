// We will pull the data from the JSON file and randomly select a student 
// Create a function that then randomize a selection from that data
// On a button click we will display the data onto the DOM

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let codestackemail = document.getElementById("codestackemail");
let email = document.getElementById("email");
let randomName = document.getElementById("randomName")
let fullName = document.getElementById("fullName")
let previousNames = [];

// Create a function that will pull the data from the JSON file
// .then() is a promise that will wait for the data to be returned
// promise can be accepted or rejected
function getStudentData(){
    return fetch('../data/data.json')
    .then( response => response.json())
    .then(data => {
        console.log(data)
        return data.students;
    })
}

getStudentData();
//Create a function that will randomize the selection of a student
function getRandomStudent(students){
    let randomIndex = Math.floor(Math.random() * students.length);
    console.log([randomIndex]);
    return students[randomIndex];
}

//Create a function that will display the data on to the DOM
randomName.addEventListener('click', () =>{
    getStudentData().then( students => {
        
        let randomStudent = getRandomStudent(students);
        console.log(randomStudent);
        let fullName = randomStudent.firstName + " " + randomStudent.lastName;
        fullNameElement.innerText = fullName;
        previousNames.push(fullName);
        codestackemail.innerText = randomStudent.codestackemail;
        email.innerText = randomStudent.email;
        nameList();

            
    })
});

function nameList(){
    if (previousNames.length > 5) {
      previousNames.shift(); // Remove the oldest name
    }
  
    const previousNamesList = document.getElementById('previousNamesList');
    previousNamesList.innerHTML = ''; // Clear the list
  
    previousNames.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      previousNamesList.appendChild(li);
    });
  }

