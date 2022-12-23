ymaps.ready(init);

var map;

function loadJson(selector) {
    return document.querySelectorAll(selector).getAttribute('data-json');
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
        // Load Json Data
        jsonDatas = document.querySelectorAll('.jsonData');

        for (let index = 0; index < jsonDatas.length; index++) {
            const elementId = jsonDatas[index].querySelector('#objid').getAttribute('data-json');
            const elementX = jsonDatas[index].querySelector('#objx').getAttribute('data-json');
            const elementY = jsonDatas[index].querySelector('#objy').getAttribute('data-json');
            const elementImageUrl = jsonDatas[index].querySelector('#objimgurl').getAttribute('data-json');
            const elementName = jsonDatas[index].querySelector('#objnomi').getAttribute('data-json');

            var myPlacemark1 = new ymaps.Placemark([elementX, elementY], {
                balloonContent: `<a class="modal" onclick=modal() href="#"><p>${elementName}</p> <img src="${elementImageUrl}" alt=""/><a/>`,
            },
                {
                    preset: 'islands#greenDotIconWithCaption'
                });
            map.geoObjects.add(myPlacemark1);
        }


        
        
        // for (let index = 0; index < realJson.length; index++) {
        //     const element = realJson[index];
        //     console.log(element.ty);
        // }
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

    
}