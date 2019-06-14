// $(document).on('click', "#googlemapIcon", function(initMap){
// var config = {
//   apiKey: "AIzaSyCxC0EKmN7JN1t0osgs-C2Q2sdWhnZI83M",
//   databaseURL: "https://assignmenttracker-test.firebaseio.com/"
// };

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCxC0EKmN7JN1t0osgs-C2Q2sdWhnZI83M",
  authDomain: "assignmenttracker-test.firebaseapp.com",
  databaseURL: "https://assignmenttracker-test.firebaseio.com",
  projectId: "assignmenttracker-test",
  storageBucket: "assignmenttracker-test.appspot.com",
  messagingSenderId: "626442309702",
  appId: "1:626442309702:web:e2fe8f2e7084aa91"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

console.log(database);

database.ref().on(
  "value",
  function(snapshot) {
    console.log("values", snapshot.val());
  },
  function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  }
);


$("#submitAssignmentLog").on("click", function() {
  var assignmentId = $('#assignmentId_input').val.trim();
  var taskId = $('#taskId_input').val.trim();
  var developerId = $('#developerId_input').val.trim();
  var priority = $('#priority_input').val.trim();
  var taskName = $('#taskName_input').val.trim();
  var description = $('#description_input').val.trim();

  var assignmentLogInfo = {
    formAssignmentId : assignmentId,
    formTaskId : taskId,
    formDeveloperId : developerId,
    formPriority : priority,
    formTaskName : taskName,
    formDescription :description
  };
  database.ref().push(assignmentLogInfo);
  console.log(assignmentLogInfo.formAssignmentId);
  console.log(assignmentLogInfo.formDescription);
  console.log(assignmentLogInfo.formPriority);
  console.log(assignmentLogInfo.formTaskId);
  console.log(assignmentLogInfo.formTaskName);

   $('#assignmentId_input').val("");
   $('#taskId_input').val("");
   $('#developerId_input').val("");
   $('#priority_input').val("");
   $('#taskName_input').val("");
   $('#description_input').val("");
});




// $("#submitAssignmentLog").on("click", function() {
    
//   event.preventDefault();

//   // Code in the logic for storing and retrieving the most recent train information
//   var train = $("#trainname-input").val().trim();
//   var destination = $("#destination-input").val().trim();
//   var frequency = $("#frequency-input").val().trim();
//   var firstTime = $("#firsttime-input").val().trim();
  
//   var trainInfo = { 
//     formtrain: train,
//     formdestination: destination,
//     formfrequency: frequency,
//     formfirsttime: firstTime,
//     dateAdded: firebase.database.ServerValue.TIMESTAMP
//   }; 
//   database.ref().push(trainInfo);

//   console.log(trainInfo.formtrain);
//   console.log(trainInfo.formdestination);
//   console.log(trainInfo.formfrequency);
//   console.log(trainInfo.formfirsttime);
//   console.log(trainInfo.dateAdded);

//   $("#trainname-input").val("");
//   $("#destination-input").val("");
//   $("#frequency-input").val("");
//   $("#firsttime-input").val("");

// });


// })$("#googlemapIcon").click(function(){

// database.ref().push([
//   {
//     assignmentID: 1,
//     taskId: 1,
//     developerId: 1,
//     priority: 1,
//     taskName: "build something",
//     description: "description"
//   },
//   {
//     assignmentID: 2,
//     taskId: 2,
//     developerId: 2,
//     priority: 2,
//     taskName: "build something 2",
//     description: "description 2"
//   },
//   {
//     assignmentID: 3,
//     taskId: 3,
//     developerId: 3,
//     priority: 3,
//     taskName: "build something 3",
//     description: "description 3"
//   }
// ]);

$("#googlemapIcon").click(function() {
  alert("The paragraph was clicked.");
});

$("#googlemapIcon").on("click", function() {
  $("#map").show();
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}
