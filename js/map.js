var map;
    function initialize() {

      var mapOptions = {
        zoom: 17,
        disableDefaultUI: true,
        scrollwheel: false,
        center: new google.maps.LatLng(40.4149025,-3.7037002)
      };
      map = new google.maps.Map(document.getElementById('map'), mapOptions);

      var image = 'img/marker.png';

      var points = [
        ['First point',  40.4153871, -3.7081734, 1],
        ['Second point', 40.4150604, -3.7062288, 2],
        ['Third point',  40.4153886, -3.7033086, 3],
      ];

      function setMarkers(map, locations) {
        for (var i = 0; i <= locations.length; i++) {
          var point = locations[i];
          var myLatlng = new google.maps.LatLng(point[1], point[2]);
          var marker = new google.maps.Marker({
            position : myLatlng,
            map: map,
            icon: image,
            title: point[0],
            zIndex: point[3]
          });
        }
      }

      // google.maps.event.addListener(map, 'mouseover', function(event) {
      //   if (window.innerWidth > 800) {
      //     window.setTimeout(function() {
      //       map.setOptions({
      //         disableDefaultUI: false,
      //         scrollwheel: true
      //       });
      //     }, 1000);
      //   }
      // });

      // google.maps.event.addListener(map, 'mouseout', function(event) {
      //   if (window.innerWidth > 800) {
      //     window.setTimeout(function() {
      //       map.setOptions({
      //         disableDefaultUI: true,
      //         scrollwheel: false
      //       });
      //     }, 1000);
      //   }
      // });

      setMarkers(map, points);

    }

    google.maps.event.addDomListener(window, 'load', initialize);