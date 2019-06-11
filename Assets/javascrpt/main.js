

// $(document).on('click', "#googlemapIcon", function(){
    $("#googlemapIcon").on('click',function(){
        $('#map').show();
      })
     
     var map;
          function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: -34.397, lng: 150.644},
              zoom: 8
            });
          }    
//     var googlemapicon.
// firebase username, password, sumbit storage, check authentication

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAEuerlOLYMOBNogqwF-yGw87MD3DEBrHo",
    authDomain: "first-group-project-64a3b.firebaseapp.com",
    databaseURL: "https://first-group-project-64a3b.firebaseio.com",
    projectId: "first-group-project-64a3b",
    storageBucket: "first-group-project-64a3b.appspot.com",
    messagingSenderId: "362226278803",
    appId: "1:362226278803:web:f676ad9e2157d83e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);

  const database = firebase.database();
  const ref = database.ref('username/password');
  const data = {
    name: "victoria",
    password: 1234
  }
  ref.push(data);
   

// $(document) firebase stores user information//

  
  




