angular.module('accessopolis.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }  ,
      { id: 4, title: 'Cats1', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
      { id: 5, title: 'Dogs1', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
      { id: 6, title: 'Turtles1', description: 'Everyone likes turtles.' },
      { id: 7, title: 'Sharks1', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' },
      { id: 8, title: 'Cats2', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
      { id: 9, title: 'Dogs2', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
      { id: 10, title: 'Turtles2', description: 'Everyone likes turtles.' },
      { id: 11, title: 'Sharks2', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
})


.factory('LocationService', function() {
    // Might use a resource here that returns a JSON array


    var cities = [
        { id: 0, title: 'Lugano', description: 'Ticino biggest city' },
        { id: 1, title: 'Bellinzona', description: 'Ticino capital' },
        { id: 2, title: 'Locarno', description: 'Touristic city' },
        { id: 3, title: 'Ascona', description: 'Ticino for german speakers :-)' }
    ];

    var location_types = [
        { id: 0, label: 'Library', description: 'Organized collection of sources of information'},
        { id: 1, label: 'Museum', description: 'Institution that cares a collection of scientific, artistic, cultural, or historical of artifacts'}
    ];

    var locations = [
        {id:0, title: 'Biblioteca Salita dei Frati', description: 'Biblioteca Salita dei Frati', address: {street: 'Salita dei Frati', streetnr: '4', zip: '6900', city: 'Lugano'}, type: 0},
        {id:1, title: 'Museo Cantonale di Storia Naturale', description: 'Polo di riferimento in campo naturalistico', address: {street: 'Viale Carlo Cattaneo', streetnr: '4', zip: '6901', city: 'Lugano'}, type: 1},
        {id:2, title: 'Biblioteca 2', description: 'Biblioteca 2', address: {street: 'Salita dei Frati', streetnr: '5', zip: '6900', city: 'Lugano'}, type: 0},
        {id:3, title: 'Biblioteca 3', description: 'Biblioteca 3', address: {street: 'Salita dei Frati', streetnr: '6', zip: '6900', city: 'Lugano'}, type: 0},
        {id:4, title: 'Biblioteca 4', description: 'Biblioteca 4', address: {street: 'Salita dei Frati', streetnr: '7', zip: '6900', city: 'Lugano'}, type: 0},
        {id:5, title: 'Biblioteca 5', description: 'Biblioteca 5', address: {street: 'Salita dei Frati', streetnr: '8', zip: '6900', city: 'Lugano'}, type: 0},
        {id:6, title: 'Biblioteca 6', description: 'Biblioteca 6', address: {street: 'Salita dei Frati', streetnr: '9', zip: '6900', city: 'Lugano'}, type: 0},
        {id:7, title: 'Biblioteca 7', description: 'Biblioteca 7', address: {street: 'Salita dei Frati', streetnr: '10', zip: '6900', city: 'Lugano'}, type: 0}
    ];

    return {
        all: function() {
            return locations;
        },
        get: function(locationId) {
            //TODO fix error if locations are not ordered by Id
            // Simple index lookup
            return locations[locationId];
        },
        getCities: function() {
            return cities;
        }
    }
});
