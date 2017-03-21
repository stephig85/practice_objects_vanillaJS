// message will hold the string of html
var message = '';

// student will hold a student object each time the loop runs
var student;

var response;

function print(message){
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

//create a function to pass a student object to
function getStudent(student){
  var report = '<h2>' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  return report;
}

while(true) {
 response = prompt("Enter a student's name to display their information. Type 'quit' to exit the prompt at any time.");
  if (response === null || response.toLowerCase() === 'quit') {
    break;
  }

  // loop through the student array, display each student's info on the page in a message
 for (var i = 0; i < students.length; i++) {
   student = students[i];
   if (student.name === response){
     message = getStudent(student);
     print(message);
    } else {
      message = 'That student is not in this directory.';
      print(message);
    }
  }
}
