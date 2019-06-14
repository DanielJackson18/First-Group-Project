$(document).ready(function() {

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

      database.ref().on("value", function(snapshot){
        console.log('firebase', snapshot.val());


// Another Form of ForLoop
// var person = {fname:"John", lname:"Doe", age:25}; 

// var text = "";
// var x;
// for (x in person) {
//   text += person[x] + " ";
// }

        for(assignment in snapshot.val()){
            console.log('assignment: ', snapshot.val()[assignment]);
            var assignmentObject = snapshot.val()[assignment];

            var tableRow = $("<tr>");
            var tableAssignId = $("<td>");
            tableAssignId.text(assignmentObject.assignId);
            tableRow.append(tableAssignId);
            
            var tableTaskName = $("<td>");
            tableTaskName.text(assignmentObject.taskName);
            tableRow.append(tableTaskName);

            var tableDevId = $("<td>");
            tableDevId.text(assignmentObject.devId);
            tableRow.append(tableDevId);

            var tableDescription = $("<td>");
            tableDescription.text(assignmentObject.description);
            tableRow.append(tableDescription);

            $("tbody").append(tableRow);
        }
      })

});
