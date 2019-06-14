$(document).ready(function() {
  console.log("hello world");
  
  var firebaseConfig = {  
    apiKey: "AIzaSyCA53rTh8q7XMNijpBqmkGXKaADBVqV0Qs",
    authDomain: "project1-cb6a4.firebaseapp.com",
    databaseURL: "https://project1-cb6a4.firebaseio.com",
    projectId: "project1-cb6a4",
    storageBucket: "",
    messagingSenderId: "648771138120",
    appId: "1:648771138120:web:cd2b4f20afa3f6fd"
  
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  


  $("#submitAssignmentLog").on("click", function(event) {
      event.preventDefault();

      getAssignmentValues();
  })

  function getAssignmentValues() {
      var assignmentId = $("#assignmentId_input").val();
      var taskId = $("#taskId_input").val();
      var devId = $("#developerId_input").val();
      var priority = $("#priority_input").val();
      var taskName = $("#taskName_input").val();
      var description = $("#description_input").val();

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
      console.log("data has probably been sent")
  }
});




//     // Firebase watcher .on("child_added"
//     database.ref().on("child_added", function(snapshot) {
//       // storing the snapshot.val() in a variable for convenience
//       var sv = snapshot.val();

//       // Console.loging the last user's data
//       console.log(sv.name);
//       console.log(sv.email);
//       console.log(sv.age);
//       console.log(sv.comment);

//       // Change the HTML to reflect
//       $("#name-display").text(sv.name);
//       $("#email-display").text(sv.email);
//       $("#age-display").text(sv.age);
//       $("#comment-display").text(sv.comment);

//       // Handle the errors
//     }, function(errorObject) {
//       console.log("Errors handled: " + errorObject.code);
//     });

//   </script>

// </body>

// </html>



// var firebaseConfig = {
//     apiKey: "AIzaSyCA53rTh8q7XMNijpBqmkGXKaADBVqV0Qs",
//     authDomain: "project1-cb6a4.firebaseapp.com",
//     databaseURL: "https://project1-cb6a4.firebaseio.com",
//     projectId: "project1-cb6a4",
//     storageBucket: "",
//     messagingSenderId: "648771138120",
//     appId: "1:648771138120:web:cd2b4f20afa3f6fd"
//   };

//   console.log(firebase);
//   var database = firebase.database();
//   var ref = detabase.ref('assignmentEntry');
 

//   var assignmentId = $('#assignmentId_input').val.trim();
//   var taskId = $('#taskId_input').val.trim();
//   var developerId = $('#developerId_input').val.trim();
//   var priority = $('#priority_input').val.trim();
//   var taskName = $('#taskName_input').val.trim();
//   var description = $('#description_input').val.trim();

//   var adata = {
//     formAssignmentId : assignmentId,
//     formTaskId : taskId,
//     formDeveloperId : developerId,
//     formPriority : priority,
//     formTaskName : taskName,
//     formDescription : description

//   };

//   // var data = {
//   //     assignmentId : $('#assignmentId_input').val.trim(),
//   //     taskId = $('#taskId_input').val.trim(),
//   //     developerId = $('#developerId_input').val.trim(),
//   //     priority = $('#priority_input').val.trim(),
//   //     taskName = $('#taskName_input').val.trim(),
//   //     description = $('#description_input').val.trim()
//   // }
//   ref.push(data);
