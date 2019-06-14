
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


  



  //Map API//
  //map div located contact us page 7//

  window.onload = function() {
    L.mapquest.key = 'v8hfuoU1S9cFOY1kHHpWH5dAHy6mjWJm';

    var map = L.mapquest.map('map', {
      center: [37.7749, -122.4194],
      layers: L.mapquest.tileLayer('map'),
      zoom: 13,
      zoomControl: false
    });

    L.control.zoom({
      position: 'topright'
    }).addTo(map);

    L.mapquest.directionsControl({
      routeSummary: {
        enabled: false
      },
      narrativeControl: {
        enabled: true,
        compactResults: false
      }
    }).addTo(map);

  }
  
  
  
//User Name/Password Authentication//
// User name/password located home *page 1 //

var objPeople = [
{
  username: "sam",
  password: "codify"
},
{
  username: "daniel",
  password: "acadamy"
},
{
  username: "victoria",
  password: "forever"
}
] 

function getInfo(){
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  

for(i = 0; i < objPeople.length; i++) {
  if(username == objPeople[i].username && password == objPeople[i].
    password) {
    console.log(username + " logged in!!!")
    return
  }

}
console.log("incorrect username or password")
}

//Need Modale function declining incorrect password//





//Need function directing correct password to developer page//



// Task Manger function *located page 4 //

$(document).ready(function(){
  var newListItem;
  var newList = true;
  var theList = document.getElementById( 'theList');

  $('#addToDo').on('click', function (e) {
    e.preventDefault();
    if (newList == true) {
      var theValue = $("#toDoItem").val();
      newListItem = '<li><span class= "handle"> :: </span> <input class="listItem" value=' +
      theValue + '"><a class="removeListItem" style="display: none;"  href="#"> x </a> </li>"';
                   newList = false;
    }else {
      var theValue = $("#toDoItem").val();
      newListItem = $('#theList li:last').clone();
      newListItem.find('input').attr('value', theValue);
    } 

    var theCount = $('#theList li').lenght + 1;
    if (theCount > 1) {
      $('#doClearAll').css('display', 'block');
    }

    $('#theList').append(newListItem);

    
    $('#toDoItem').val('');
    $('#toDoItem').focus();
    $('sortable').sortable('destroy');
    $('sortable').sortable({
      handle: '.handle'
    });

    localStorage.setItem('todoListPlus',theList.innerHTML);

  });
  $('input[type="text"]').on('keydown',function(e) {
    var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
    if(key == 13) {
      e.preventDefault();
      var inputs = $(this).closest('form').find(':input:visible');
      inputs.eq( inputs.index(this)+ 1).focus();
    }
  });
  $('theList').on('change','.listItem',function(e){
    currentValue = $(this).val();
    $(this).attr('value', currentValue);
    localStorage.setItem('todoListPlus',theList.innerHTML);
  });

  $('.sortable').sortable().bind('sortupdate',function(){
    localStorage.setItem('todoListPlus',theList.innerHTML);
  });
  $('#theList').on('mouseover','li', function(){
    var $thisA = $(this).find('a');
    $thisA.css('display','block');
  });
  $('#theList').on('mouseout','li', function(){
    var $thisA = $(this).find('a');
    $thisA.css('display','none');

});
$('#theList').on('click','.removeListeItem',function(e){
  e.preventDefault();
  $(this).parent().remove();
  localStorage.setItem('todoListPlus',theList.innerHTML);
});

$('#doClearAll').on('click','#ClearAll', function(e){
  e.preventDefault();
  $('#theList').children().remove();
  newList = true;
  $('toDoItem').val('');
  $('#doClearAll').css('display','none');
  $('#toDoItem').focus();
  localStorage.setItem('todoListPlus',theList.innerHTML);
});
loadToDo();

function loadToDo(){
  if(localStorage.getItem('todoListPlus')){
    theList.innerHTML = localStorage.getItem('todoListPlus');
    $('sortable').sortable('destroy');
    $('sortable').sortable({
      handle: '.handle'
  });
  var theCount = $('#theList li').lenght + 1;
    if (theCount > 1) {
      $('#doClearAll').css('display', 'block');
    }
  }
}




  
  





