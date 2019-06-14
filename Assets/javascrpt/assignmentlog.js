$(document).ready(function() {
    console.log(“hello world”);

    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAgC2DGeeFWV8C61Rcmrv8IdlCawDW1kzw",
    authDomain: "first-group-project-f0582.firebaseapp.com",
    databaseURL: "https://first-group-project-f0582.firebaseio.com",
    projectId: "first-group-project-f0582",
    storageBucket: "first-group-project-f0582.appspot.com",
    messagingSenderId: "184202572556",
    appId: "1:184202572556:web:4c98835478d1e3d9"
  };
   
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   
    var database = firebase.database();
   
   
   
   
    $(“#submitAssignmentLog”).on(“click”, function(event) {
        event.preventDefault();
   
        getAssignmentValues();
    })
   
    function getAssignmentValues() {
        var assignmentId = $(“#assignmentId_input”).val();
        var taskId = $(“#taskId_input”).val();
        var devId = $(“#developerId_input”).val();
        var priority = $(“#priority_input”).val();
        var taskName = $(“#taskName_input”).val();
        var description = $(“#description_input”).val();
   
        var assignObj = {
            assignId : assignmentId,
            taskId : taskId,
            devId : devId,
            priority : priority,
            taskName : taskName,
            description : description
        }
   
        writeUserData(assignObj);
    };
   
    function writeUserData(assignObj) {
        database.ref().push({
          assignId: assignObj.assignId,
          taskId: assignObj.taskId,
          devId : assignObj.devId,
          priority :assignObj.priority,
          taskName : assignObj.taskName,
          description :assignObj. description
   
        });
        console.log(“data has probably been sent”)
    }
   });