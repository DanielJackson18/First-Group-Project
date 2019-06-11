
  // Firebase API//
  



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




  
  



