// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 29.1492, lng: 75.7217 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 8,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "hisar",
  });
}

// initMap();




// let map;
//     var directionsService;
//     var directionsRenderer;
//     var sourceAutocomplete;
//     var destAutocomplete;
    
    // async function initMap() {

    //     const position = { lat: 29.1492, lng: 75.7217 };
    //     // Request needed libraries.
    //     //@ts-ignore
    //     const { Map } = await google.maps.importLibrary("maps");
    //     const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    //     map= new Map(document.getElementById("map"),{
    //         zoom: 8,
    //         center: position,
    //         mapID: "DEMO_MAP_ID",
    //     });

    //     const marker = new AdvancedMarkerElement({
    //         map: map,
    //         position: position,
    //         title: "hisar",
    //     });
    // }
//         google.maps.event.addListener(map, "click", function(event){
//             this.setOptions({scrollwheel:true});
//         });
//         directionsService = new google.maps.DirectionsService();
//         directionsRenderer= new google.maps.DirectionsRenderer();
//         directionsRenderer.setMap(map);

//         sourceAutocomplete = new google.maps.places.AutoComplete(
//             document.getElementById('source')
//         );
//         destAutocomplete = new google.maps.places.AutoComplete(
//             document.getElementById('dest')
//         );
//     }

//     var marker = new google.maps.Marker({position: myCenter})
//     marker.setMap(map);
    
//     function calcRoute(){
//         var source = document.getElementById('source').value
//         var dest = document.getElementById('dest').value

//         let request ={
//             origin: source,
//             destination:dest,
//             travelMode:'DRIVING',
//         }

//         directionsService.route(request, function(result,status){
//             if(status=="OK"){
//                 directionsRenderer.setDirections(result)
//             }
//         })
    // }
    initMap();