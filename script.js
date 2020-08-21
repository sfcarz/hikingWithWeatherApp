$(document).ready(function () {

    const $search = $('#search');
    const $searching = $('#Searching')

    

    $searching.on('click', function (event) {
        event.preventDefault();

        const location = $search.val();
        console.log(location);

        let mapBox = {
            "url": `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoic2ZjYXJ6IiwiYSI6ImNrZTNlNnhpeDBpNDEyc3BkcWNvemFxbWwifQ.3DHiansNJIe-pYfUswUVCw`,
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(mapBox).done(function (response) {
            console.log(response);
            console.log(response.features);
            console.log(response.features[0]);
            console.log(response.features[0].bbox);
            console.log(response.features[0].bbox);

            // const lat = response.features.bbox.[0];
            // const lon = response.features.bbox.[1];
            // console.log(lat, lon);
        });

        $.ajax({
            url: `http://api.weatherstack.com/current?access_key=f1a8eeecc5bdbf06ef0f440e0391e09c&query=${location}`,
            method: "GET",
        }).then(function (response) {
            console.log(response);

            const lat = response.location.lat;
            const long = response.location.lon;

            var hikingProject = {
                "url": `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=10&key=200880411-841c1a0ca5adc9793fce6b5e9604bc2f`,
                "method": "GET",
                "timeout": 0,
            };

            $.ajax(hikingProject).done(function (response) {
                console.log(response);
            });


        });
    });

    
    
        








}); 