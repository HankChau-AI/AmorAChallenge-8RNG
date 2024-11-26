
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let codestackemail = document.getElementById("codestackemail");
let email = document.getElementById("email");
let randomName = document.getElementById("randomName")
let fullName = document.getElementById("fullName")
let previousNames = [];
let previousEmails = [];


function getStudentData(){
    return fetch('../data/data.json')
    .then( response => response.json())
    .then(data => {
        console.log(data)
        return data.students;
    })
}

getStudentData();

function getRandomStudent(students){
    let randomIndex = Math.floor(Math.random() * students.length);
    console.log([randomIndex]);
    return students[randomIndex];
}


randomName.addEventListener('click', () =>{
    getStudentData().then( students => {
        
        let randomStudent = getRandomStudent(students);
        console.log(randomStudent);
        let fullName = randomStudent.firstName + " " + randomStudent.lastName;
        fullNameElement.innerText = fullName;
        previousNames.push(fullName);
        codestackemail.innerText = randomStudent.codestackemail;
        email.innerText = randomStudent.email;
        let bothEmails = randomStudent.codestackemail + " | " + randomStudent.email;
        previousEmails.push(bothEmails);
        nameList();
        emailList();

            
    })
});

function nameList(){
    if (previousNames.length > 5) {
      previousNames.shift(); 
    }
  
    const previousNamesList = document.getElementById('previousNamesList');
    previousNamesList.innerHTML = ''; 
  
    previousNames.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      previousNamesList.appendChild(li);
    });
  }

  function emailList(){
    if (previousEmails.length > 5) {
      previousEmails.shift(); 
    }
  
    const previousEmailsList = document.getElementById('previousEmailsList');
    previousEmailsList.innerHTML = ''; 
  
    previousEmails.forEach(email => {
      const li = document.createElement('li');
      li.textContent = email;
      previousEmailsList.appendChild(li);
    });
  }


