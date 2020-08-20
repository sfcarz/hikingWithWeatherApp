// Team will write here
$(document).ready(function () {

    const $search = $('#search');
    const $searching = $('#Searching')

    $searching.on('click', function (event) {
        event.preventDefault();

        const location = $search.val();
        console.log(location);

        $.ajax({
            url: `http://api.weatherstack.com/current?access_key=f1a8eeecc5bdbf06ef0f440e0391e09c&query=${location}`,
            method: "GET",
        }).then(function (response) {
            console.log(response);

            const lat = response.location.lat;
            const long = response.location.lon;

            var settings = {
                "url": `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=10&key=200880411-841c1a0ca5adc9793fce6b5e9604bc2f`,
                "method": "GET",
                "timeout": 0,
            };

            $.ajax(settings).done(function (response) {
                console.log(response);
            });


        });
    });








});