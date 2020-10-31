// make an arrray to hold all of the favorite
var favorites = [null, null, null, null];

//This array will hold objects that hold the long and lat coords of that point
//Adds given location to the favorites list
function addFavorite(theLocation, theName) {
  //Make an object to be stored in the array
  var fav = {
    name: theName,
    lng: theLocation.lng,
    lat: theLocation.lat,
  };
  console.log(fav);
  //assign that object into favorites memory
  //this is a very inificient way of doing this. will be fixed with for loop
  favorites[3] = favorites[2];
  favorites[2] = favorites[1];
  favorites[1] = favorites[0];
  favorites[0] = fav;
  //Call method to update the display
  displayFavorites();
}
//displays the favorites in the appropriate fields
function displayFavorites() {
  for (var i = 1; i <= 4; i++) {
    var currentTarget = "#item-" + i;
    if (favorites[i - 1] != null) {
      $(currentTarget).text(favorites[i - 1].name);
    } else {
      $(currentTarget).text("");
    }
  }
}
//Listen for a click on on the favoites button
$("#favorite-button").on("click", function () {
  addFavorite(mouseLngLat, $("#place-name").val());
  $("#place-name").val("");
});

//load in the map points from favorites
$("#load-button").on("click", function () {
  for (var i = 0; i < 4; i++) {
    if (favorites[i] != null) {
      var currentMarker = new mapboxgl.Marker()
        .setLngLat([favorites[i].lng, favorites[i].lat])
        .addTo(map);
    }
  }
});
