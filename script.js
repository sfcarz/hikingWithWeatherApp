$(document).ready(function () {

    const $search = $('#search');
    const $searching = $('#Searching');

    // const tempF = (temp * 9/5) + 32;


    let position;
    navigator.geolocation.getCurrentPosition(function (pos) {
        // console.log(pos);
        position = pos;
    });



    $searching.on('click', function (event) {
        event.preventDefault();
        $search.empty();

        const location = $search.val();
        // console.log(location);
        
            let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?country=US&type=place&limit=1&access_token=pk.eyJ1Ijoic2ZjYXJ6IiwiYSI6ImNrZTNlNnhpeDBpNDEyc3BkcWNvemFxbWwifQ.3DHiansNJIe-pYfUswUVCw`;
                    
            if (position) {
                url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?country=US&type=place&limit=1&proximity=${position.coords.longitude},${position.coords.latitude}&access_token=pk.eyJ1Ijoic2ZjYXJ6IiwiYSI6ImNrZTNlNnhpeDBpNDEyc3BkcWNvemFxbWwifQ.3DHiansNJIe-pYfUswUVCw`
            };
            
            let mapBox = {
                url: url,        
                method: "GET",
                timeout: 0,
                    };

                    $.ajax(mapBox).done(function (response) {
                        // console.log(response);

                        let mapLong = response.features[0].center[0];
                        let mapLat = response.features[0].center[1];

                        let hikingProject = {
                            url: `https://www.hikingproject.com/data/get-trails?lat=${mapLat}&lon=${mapLong}&maxDistance=10&key=200880411-841c1a0ca5adc9793fce6b5e9604bc2f`,
                            method: "GET",
                            timeout: 0,
                        };

                        $.ajax(hikingProject).done(function (response) {
                            // console.log(response);
                            let res = response.trails
                            // console.log(response.trails[0].difficulty);

                            for (let i = 0; i < res.length; i++) {
                                // console.log(i);
                                
                            let rating = response.trails[i].difficulty;
                            let image = response.trails[i].imgMedium;
                            let location = response.trails[i].location;
                            let name = response.trails[i].name;
                            let summary = response.trails[i].summary;
                            // console.log(summary);

                            // cardMb goes to cardRow
                            let cardRow = $('<div>').addClass('row-cols-3 row-cols-md-3');
                            $('#containerCards').prepend(cardRow);
                            // cardP4 goes to cardMb
                            let cardMb = $('<div>').addClass('col mb-4');
                            cardRow.append(cardMb);
                        
                            // Must set the unique Id for each card
                            // in order appending to card P-4 (CardImg, body)
                            let cardP4 = $('<div>').addClass('card h-100');
                        
                        
                            // anchor then img append to CardImg
                            let cardImg = $('<div>').addClass('view overlay');
                            let img = $('<img>').addClass('card-img-top').attr('src', image);
                            // cardP4.append(cardImg, body);
                            let body = $('<div>').addClass('card-body');
                            let title = $('<h4>').addClass('card-title').text(name);
                            let cardText = $('<p>').addClass('card-tet').text(summary);
                            // let button = $('<a>').addClass('white-text d-flex justify-content-end').attr('href' `#`);
                            // let h5 = $('<h5>').text('Read more');
                            // let i = $('<i>').addClass('fas fa-angle-double-right');
                            // h5.append(i);
                            // button.append(h5);
                            body.append(title, cardText);
                            cardImg.append(img);
                            cardP4.append(cardImg, body);
                            cardMb.append(cardP4);

                        
                            // whiteSlight appends to anchor
                            // let anchor = $('<a>').attr(`href: #`);
                            // let whiteSlight = $('<div>').addClass('mask rgba-white-slight');
                            // cardImg.append(img, anchor)
                            // anchor.append(whiteSlight);
                        
                            // button, cardText then title append to body in order (title, cardText, button)
                            
                        
                        
                            // i goes into h5 and h5 goes into button
                            
                        

                        };

                            // console.log(rating, image, location, name, summary);
                        });

                    });

                    $.ajax({
                        url: `http://api.weatherstack.com/current?access_key=f1a8eeecc5bdbf06ef0f440e0391e09c&query=${location}`,
                        method: "GET",
                    }).then(function (response) {
                        // console.log(response);

                        const lat = response.location.lat;
                        const long = response.location.lon;

                        let feels = response.current.feelslike;
                        let humid = response.current.humidity;
                        let temp = response.current.temperature;
                        let vis = response.current.visibility;
                        let desc = response.current.weather_descriptions[0];
                        let name = response.location.name;

                        const payLoad = { feels, humid, temp, vis, desc, name };

                        let weatherCard = $('<div>').addClass('card text-center');
                        let content = $('<div>').addClass('card-body elegant-color white-text rounded-bottom');
                        let tittles = $('<h4>').addClass('card-title').text(name);
                        let p = $('<p>').attr('data-attr', JSON.stringify(payLoad));
                        let feelsP = $('<p>').text(`Feels Like: ${feels}`);
                        let humidP = $('<p>').text(`Humidity: ${humid}`);
                        let tempP = $('<p>').text(`Temperature: ${temp}`);
                        let visP = $('<p>').text(`visibility: ${vis}`);
                        let descP = $('<p>').text(desc);
                        weatherCard.append(content);
                        content.append(tittles, feelsP, humidP, tempP, visP, descP);
                        $('#weather').prepend(weatherCard);


                        // $('#weatherTitle').text(name);
                        // $('#weatherInfo').append(feelsP, humidP, tempP, visP, descP, p);

                        // console.log(feels, humid, temp, vis, desc);

                    });
                });




}); 
