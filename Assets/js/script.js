$("#cityNameButton").on("click", function (event) {
    event.preventDefault()
    var whatCity = $("#cityNameButton").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + whatCity + "&appid=d3c0ea2c89eff31a48aea013e1828f98";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    for (let i = 0; i < response.hits.length; i++) {
        var recList = response.hits[i];
    $("#tempInfo").text(JSON.stringify(response));
    //  --> to display items (currently only showing words)
    }
});


// test city function
var whatCity = London,uk;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + whatCity + "&appid=d3c0ea2c89eff31a48aea013e1828f98";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});

});