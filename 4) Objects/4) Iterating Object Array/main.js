const cars = [
  {
    name: 'zen',
    model: 2003,
    average: 23.5,
    'main features': ['Compact', 'Cheap', 'Diesel version'],
    cheap: true
  },
  {
    name: 'santro',
    model: 2007,
    'main features': ['Smart Look', 'Spacy', 'Stereo support'],
    cheap: false
  },
  {
    name: 'alto',
    model: 2005,
    cheap: false
  }
];

function find_property(name, prop) {
  for (var i = 0; i < cars.length; i++) {
    if (cars[i].name == name) {
      //~ Not a good way. Use .hasOwnProperty() instead
      return cars[i][prop] || name + ' has no property named "' + prop + '"';
    }
  }
  return 'No car named ' + name + ' found';
}

console.log(find_property('zen', 'main features'));
console.log(find_property('alto', 'main features'));
console.log(find_property('verna', 'main features'));
