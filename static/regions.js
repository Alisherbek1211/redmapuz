ymaps.ready(init);

var map;

function loadJson(selector) {
    return document.querySelector(selector).getAttribute('data-json');
  }

  window.onload = function () {
    var jsonData = loadJson('#jsonData');
    console.log(jsonData);
}

function init() {
    map = new ymaps.Map('map', {
        center: [41.765073, 63.150127],
        zoom: 1,
        type: 'yandex#hybrid',
        controls: ['zoomControl']
    }, {
        restrictMapArea: [[34.18, 50.99], [47.60, 78.15]]
    });
    map.controls.get('zoomControl').options.set({ size: 'small' });

    ymaps.borders.load('001', {
        lang: 'ru',
        quality: 2
    }).then(function (result) {

        var background = new ymaps.Polygon([
            [
                [85, -179.99],
                [85, 179.99],
                [-85, 179.99],
                [-85, -179.99],
                [85, -179.99]
            ]
        ], {}, {
            strokeWidth: 0,
            coordRendering: 'straightPath'
        });

        var region = result.features.filter(function (feature) { return feature.properties.iso3166 == 'UZ'; })[0];

        var masks = region.geometry.coordinates;
        masks.forEach(function (mask) {
            background.geometry.insert(1, mask);
        });

        map.geoObjects.add(background);     
    })
}

let modalContent = document.querySelector('.modal-content');

modal = function () {
    modalContent.style.display = 'block';
    modalContent.style.position = 'absolute';
    modalContent.style.top = '50%';
} 

function createxy(x, y) {
    console.log('ishladi');

    var myPlacemark1 = new ymaps.Placemark([41, 69], {
        balloonContent: `<a class="modal" onclick=modal() href="#"><p>Qushlar haqida malumot</p> <img src="./image/logo.png" alt=""/><a/>`,
    },
        {
            preset: 'islands#greenDotIconWithCaption'
        });
    map.geoObjects.add(myPlacemark1);
}