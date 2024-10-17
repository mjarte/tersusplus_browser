
// Inicializar el mapa
geocodeAddress();

var map = L.map('map').setView([-34.170249, -70.7407427], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© OpenStreetMap contributors, Humanitarian OSM Team'
}).addTo(map);

// Array para almacenar los marcadores
let markers = [];

// Función para geocodificar la dirección y crear el marcador
async function geocodeAddress() {
const address = document.getElementById('address').value;
try {
const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
if (response.data.length > 0) {
  const { lat, lon, display_name } = response.data[0];
  const marker = L.marker([lat, lon], { draggable: true, data: { lat, lon, display_name } }).addTo(map);
  markers.push(marker);
  map.panTo(new L.LatLng(lat, lon));

  // Evento para mostrar alerta con información al hacer clic en el marcador
  marker.on('click', function() {
    const { lat, lon, display_name } = this.options.data;
    //alert(`Datos del Punto:\nLatitud: ${lat}\nLongitud: ${lon}\nDirección: ${display_name}`);
    //document.getElementById('info').innerHTML="Geolocalizacion:\n"+lat+","+lon+"\nDirección:\n"+display_name+"";
    document.getElementById('info').innerHTML=display_name;
  });





  // Evento para actualizar la ubicación y los datos cuando se suelta el marcador
  marker.on('dragend', function(event) {
    var newLatLng = event.target.getLatLng();
    document.getElementById('latlon').value = `${newLatLng.lat}, ${newLatLng.lng}`;
    updateMarkerData(marker, newLatLng.lat, newLatLng.lng);


          // Encontrar el polígono que contiene el marcador
let polygonName = '';

if (pointInPolygon(newLatLng, polygon1)) {
polygonName = JSON.stringify(polygon1.options.name);
}
if (pointInPolygon(newLatLng, polygon2)) {
polygonName = JSON.stringify(polygon2.options.name);
}
if (pointInPolygon(newLatLng, polygon3)) {
polygonName = JSON.stringify(polygon3.options.name);
}
if (pointInPolygon(newLatLng, polygon4)) {
polygonName = JSON.stringify(polygon4.options.name);
}
if (pointInPolygon(newLatLng, polygon5)) {
polygonName = JSON.stringify(polygon5.options.name);
}
if (pointInPolygon(newLatLng, polygon6)) {
polygonName = JSON.stringify(polygon6.options.name);
}
if (pointInPolygon(newLatLng, polygon7)) {
polygonName = JSON.stringify(polygon7.options.name);
}
if (pointInPolygon(newLatLng, polygon8)) {
polygonName = JSON.stringify(polygon8.options.name);
}
if (pointInPolygon(newLatLng, polygon9)) {
polygonName = JSON.stringify(polygon9.options.name);
}
if (pointInPolygon(newLatLng, polygon10)) {
polygonName = JSON.stringify(polygon10.options.name);
}
if (pointInPolygon(newLatLng, polygon11)) {
polygonName = JSON.stringify(polygon11.options.name);
}
if (pointInPolygon(newLatLng, polygon12)) {
polygonName = JSON.stringify(polygon12.options.name);
}
document.getElementById('cuadrante').value =polygonName;

  });

  document.getElementById('latlon').value = `${lat}, ${lon}`;







} else {
  console.error('No se encontraron resultados de geocodificación');
  alert('No se pudo encontrar la dirección. Inténtalo de nuevo.');
}
} catch (error) {
console.error('Error al geocodificar la dirección:', error);
alert('No se pudo encontrar la dirección. Inténtalo de nuevo.');
}
}

// Función para actualizar los datos del marcador
function updateMarkerData(marker, lat, lon) {
axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
.then(response => {
  if (response.data) {
    const { display_name } = response.data;
    // Almacenar la nueva dirección en el marcador
    marker.options.data = { lat, lon, display_name };
  }
})
.catch(error => console.error('Error al actualizar los datos del marcador:', error));
}




function clearMarkers() {
    markers.forEach(marker => marker.remove());
markers = [];
document.getElementById('latlon').value = '';
}



function pointInPolygon(point, polygon) {
  return L.latLngBounds(polygon.getLatLngs()).contains(point);
}

// Tus datos de coordenadas
var myPoints =
[
    [
      -34.1673,
      -70.7594
    ],
    [
      -34.16861,
      -70.76004
    ],
    [
      -34.16874,
      -70.7604
    ],
    [
      -34.17228,
      -70.7631
    ],
    [
      -34.1733,
      -70.76279
    ],
    [
      -34.18567,
      -70.77254
    ],
    [
      -34.1905,
      -70.75266
    ],
    [
      -34.18667,
      -70.75232
    ],
    [
      -34.17566,
      -70.75425
    ],
    [
      -34.16857,
      -70.75261
    ],
    [
      -34.1673,
      -70.7594
    ]

];

// Crear un polígono
var polygon1 = L.polygon(myPoints, {color: '#d2691e',name:'Poniente Sur - 5A'});

polygon1.bindTooltip("Poniente Sur - 5A", {
permanent: true, // Muestra el tooltip de forma permanente
direction: 'top' // Posiciona el tooltip arriba del polígono
});

// Agregar el polígono al mapa
polygon1.addTo(map);


var myPoints2 =
[
[
      -34.1673,
      -70.7594
    ],
    [
      -34.16861,
      -70.76004
    ],
    [
      -34.16874,
      -70.7604
    ],
    [
      -34.17228,
      -70.7631
    ],
    [
      -34.1733,
      -70.76279
    ],
    [
      -34.18567,
      -70.77254
    ],
    [
      -34.18258,
      -70.78734
    ],
    [
      -34.17743,
      -70.78292
    ],
    [
      -34.17701,
      -70.78369
    ],
    [
      -34.1747,
      -70.78274
    ],
    [
      -34.17264,
      -70.7924
    ],
    [
      -34.16117,
      -70.79367
    ],
    [
      -34.16606,
      -70.77233
    ],
    [
      -34.16432,
      -70.77173
    ],
    [
      -34.1673,
      -70.7594
    ]

];

// Crear un polígono
var polygon2 = L.polygon(myPoints2, {color: '#d2691e',name:'Poniente Sur - 5B'});

polygon2.bindTooltip("Poniente Sur - 5B", {
permanent: true, // Muestra el tooltip de forma permanente
direction: 'top' // Posiciona el tooltip arriba del polígono
});

// Agregar el polígono al mapa
polygon2.addTo(map);







var myPoints3 =
[
[
      -34.17898,
      -70.73276
    ],
    [
      -34.18752,
      -70.74464
    ],
    [
      -34.1905,
      -70.75266
    ],
    [
      -34.20851,
      -70.72105
    ],
    [
      -34.19235,
      -70.70895
    ],
    [
      -34.17898,
      -70.73276
    ]

];

// Crear un polígono
var polygon3 = L.polygon(myPoints3, {color: '#006400',name:'Oriente Sur - 6'});

polygon3.bindTooltip("Oriente Sur - 6", {
permanent: true, // Muestra el tooltip de forma permanente
direction: 'top' // Posiciona el tooltip arriba del polígono
});

// Agregar el polígono al mapa
polygon3.addTo(map);










var myPoints4 =
[
[
      -34.17898,
      -70.73276
    ],
    [
      -34.17408,
      -70.72668
    ],
    [
      -34.17217,
      -70.72673
    ],
    [
      -34.17538,
      -70.70469
    ],
    [
      -34.18838,
      -70.71527
    ],
    [
      -34.17898,
      -70.73276
    ]

];

// Crear un polígono
var polygon4 = L.polygon(myPoints4, {color: '#00008b',name:'Oriente Sur - 7'});

polygon4.bindTooltip("Oriente Sur - 7", {
permanent: true, // Muestra el tooltip de forma permanente
direction: 'top' // Posiciona el tooltip arriba del polígono
});

// Agregar el polígono al mapa
polygon4.addTo(map);






var myPoints5 =
[
[
      -34.16719,
      -70.7272
    ],
    [
      -34.17408,
      -70.72668
    ],
    [
      -34.18752,
      -70.74464
    ],
    [
      -34.1905,
      -70.75266
    ],
    [
      -34.18667,
      -70.75232
    ],
    [
      -34.17566,
      -70.75425
    ],
    [
      -34.17308,
      -70.75365
    ],
    [
      -34.17501,
      -70.74134
    ],
    [
      -34.17647,
      -70.73641
    ],
    [
      -34.16608,
      -70.73437
    ],
    [
      -34.16719,
      -70.7272
    ]

];

// Crear un polígono
var polygon5 = L.polygon(myPoints5, {color: '#8b4513',name:'Poniente Sur - 2'});

polygon5.bindTooltip("Poniente Sur - 2", {
permanent: true, // Muestra el tooltip de forma permanente
direction: 'top' // Posiciona el tooltip arriba del polígono
});

// Agregar el polígono al mapa
polygon5.addTo(map);





var myPoints6 =
[
[
      -34.16608,
      -70.73437
    ],
    [
      -34.17647,
      -70.73641
    ],
    [
      -34.17501,
      -70.74134
    ],
    [
      -34.17308,
      -70.75365
    ],
    [
      -34.16375,
      -70.75131
    ],
    [
      -34.16608,
      -70.73437
    ]

];

// Crear un polígono
var polygon6 = L.polygon(myPoints6, {color: '#ffd700',name:'Sector Centro - 1'});

polygon6.bindTooltip("Sector Centro - 1", {
permanent: true, // Muestra el tooltip de forma permanente
direction: 'top' // Posiciona el tooltip arriba del polígono
});

// Agregar el polígono al mapa
polygon6.addTo(map);








var myPoints7 =
[
[
      -34.16175,
      -70.71175
    ],
    [
      -34.16885,
      -70.69823
    ],
    [
      -34.15701,
      -70.68688
    ],
    [
      -34.14775,
      -70.69864
    ],
    [
      -34.16175,
      -70.71175
    ]

];

// Crear un polígono
var polygon7 = L.polygon(myPoints7, {color: '#4f504e',name:'Oriente Norte - 9'});

polygon7.bindTooltip("Oriente Norte - 9", {
permanent: true, // Muestra el tooltip de forma permanente
direction: 'top' // Posiciona el tooltip arriba del polígono
});

// Agregar el polígono al mapa
polygon7.addTo(map);




var myPoints8 =
[
[
      -34.15633,
      -70.72783
    ],
    [
      -34.16175,
      -70.71175
    ],
    [
      -34.16885,
      -70.69823
    ],
    [
      -34.17538,
      -70.70469
    ],
    [
      -34.17217,
      -70.72673
    ],
    [
      -34.15633,
      -70.72783
    ]
];

// Crear un polígono
var polygon8 = L.polygon(myPoints8, {color: '#3E2723',name:'Oriente Norte - 8'});

polygon8.bindTooltip("Oriente Norte - 8", {
permanent: true, // Muestra el tooltip de forma permanente
direction: 'top' // Posiciona el tooltip arriba del polígono
});

// Agregar el polígono al mapa
polygon8.addTo(map);





var myPoints9 =
[
[
      -34.14775,
      -70.69864
    ],
    [
      -34.16175,
      -70.71175
    ],
    [
      -34.15633,
      -70.72783
    ],
    [
      -34.15184,
      -70.72825
    ],
    [
      -34.13306,
      -70.72972
    ],
    [
      -34.12667,
      -70.72774
    ],
    [
      -34.14775,
      -70.69864
    ]
];

// Crear un polígono
var polygon9 = L.polygon(myPoints9, {color: '#33691E',name:'Oriente Norte - 10'});

polygon9.bindTooltip("Oriente Norte - 10", {
permanent: true, // Muestra el tooltip de forma permanente
direction: 'top' // Posiciona el tooltip arriba del polígono
});

// Agregar el polígono al mapa
polygon9.addTo(map);



var myPoints10 =
[
[
      -34.15184,
      -70.72825
    ],
    [
      -34.15179,
      -70.73113
    ],
    [
      -34.14861,
      -70.74237
    ],
    [
      -34.14521,
      -70.7401
    ],
    [
      -34.13924,
      -70.74474
    ],
    [
      -34.16375,
      -70.75131
    ],
    [
      -34.16719,
      -70.7272
    ],
    [
      -34.15184,
      -70.72825
    ]
];

// Crear un polígono
var polygon10 = L.polygon(myPoints10, {color: '#ff1453',name:'Centro Norte - 3A'});

polygon10.bindTooltip("Centro Norte - 3A", {
permanent: true, // Muestra el tooltip de forma permanente
direction: 'top' // Posiciona el tooltip arriba del polígono
});

// Agregar el polígono al mapa
polygon10.addTo(map);








var myPoints11 =
[
[
      -34.12667,
      -70.72774
    ],
    [
      -34.13306,
      -70.72972
    ],
    [
      -34.15184,
      -70.72825
    ],
    [
      -34.15179,
      -70.73113
    ],
    [
      -34.14861,
      -70.74237
    ],
    [
      -34.14521,
      -70.7401
    ],
    [
      -34.13924,
      -70.74474
    ],
    [
      -34.12148,
      -70.74002
    ],
    [
      -34.12667,
      -70.72774
    ]
];

// Crear un polígono
var polygon11 = L.polygon(myPoints11, {color: '#ff1453',name:'Centro Norte - 3B'});

polygon11.bindTooltip("Centro Norte - 3B", {
permanent: true, // Muestra el tooltip de forma permanente
direction: 'top' // Posiciona el tooltip arriba del polígono
});

// Agregar el polígono al mapa
polygon11.addTo(map);







var myPoints12 =
[
[
      -34.16375,
      -70.75131
    ],
    [
      -34.16857,
      -70.75261
    ],
    [
      -34.1673,
      -70.7594
    ],
    [
      -34.16432,
      -70.77173
    ],
    [
      -34.16606,
      -70.77233
    ],
    [
      -34.16117,
      -70.79367
    ],
    [
      -34.12399,
      -70.75612
    ],
    [
      -34.13924,
      -70.74474
    ],
    [
      -34.16375,
      -70.75131
    ]
];

// Crear un polígono
var polygon12 = L.polygon(myPoints12, {color: '#24799e',name:'Poniente Norte - 4'});



polygon12.bindTooltip("Poniente Norte - 4", {
permanent: true, // Muestra el tooltip de forma permanente
direction: 'top' // Posiciona el tooltip arriba del polígono
});



// Agregar el polígono al mapa
polygon12.addTo(map);

polygon12.on('click', function(e) {
    document.getElementById('cuadrante').value = "Poniente Norte - 4";
  });








var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);



