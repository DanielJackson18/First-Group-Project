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
// })