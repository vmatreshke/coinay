var map;
var pointsOnMap = [
        [40.4153871, -3.7081734, 1, {
            'head'    : 'First point',
            'address' : 'address 1',
            'tel'     : '0800-800-800',
            'open'    : '8:30AM - 5:00PM',
            'common'  : 'some text'

        }],
        [40.4150604, -3.7062288, 2, {
            'head'    : 'Second point long name',
            'address' : 'address long address',
            'tel'     : '0800-800-800',
            'open'    : '8:30AM - 5:00PM',
            'common'  : 'some text'

        }],
        [40.4153886, -3.7033086, 3, {
            'head'    : 'Third point very long long long name ',
            'address' : 'address long address address long address',
            'tel'     : '0800-800-800',
            'open'    : '8:30AM - 5:00PM',
            'common'  : 'some text'

        }],
        [40.4163886, -3.7053086, 3, {
            'head'    : 'Point very long long name ',
            'address' : '',
            'tel'     : '0800-800-800',
            'open'    : '8:30AM - 5:00PM',
            'common'  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe repudiandae laborum harum quibusdam officiis eos optio ipsum. Tempora nisi numquam doloribus, sit itaque, unde deleniti molestiae qui explicabo corporis, ad.'

        }]
    ];

// Function return array of markers that was create from "locations" and added to "map"
function setMarkers(map, locations) {
        var markers = [];
        var image = new google.maps.MarkerImage('img/marker2x.png', null, null, null, new google.maps.Size(55,20));
        for (var i = 0; i < locations.length; i++) {
            var point    = locations[i];
            var myLatlng = new google.maps.LatLng(point[0], point[1]);
            var marker   = new google.maps.Marker({
                position : myLatlng,
                map      : map,
                icon     : image,
                title    : point[3].head,
                zIndex   : point[2]
            });
            marker.infoContent = point[3];
            markers.push(marker);
        }
        return markers;
    }

// After function is complete all marker in array will contain object with info for infowindow
function setInfoWindowContent(arrayOfMarkers, infoWindow) {
        for (var i = 0; i < arrayOfMarkers.length; i++) {
            google.maps.event.addListener(arrayOfMarkers[i], 'click', function() {
                var content = composeInfoWindowContent(this.infoContent);
                infoWindow.setContent(content);
                infoWindow.open(map, this);
            });
        }
    }

function composeInfoWindowContent(data) {
    return '<ul class="marker-info">' +
                '<li class="marker-info__head">'     + data.head    + '</li>' +
                '<li class="marker-info__address">'  + data.address + '</li>' +
                '<li class="marker-info__tel">'      + data.tel     + '</li>' +
                '<li class="marker-info__open">'     + data.open    + '</li>' +
                '<li class="marker-info__common">'   + data.common  + '</li>' +
            '</ul>';
    }

function initialize() {
    var mapOptions = {
            zoom: 17,
            disableDefaultUI: true,
            scrollwheel: false,
            center: new google.maps.LatLng(40.4149025,-3.7037002)
        };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var mapMarkers = setMarkers(map, pointsOnMap);

    var mapInfoWindow = new google.maps.InfoWindow();

    setInfoWindowContent(mapMarkers, mapInfoWindow);
}

google.maps.event.addDomListener(window, 'load', initialize);