jQuery(document).ready(function() {
    fetch('https://www.metaweather.com/api/location/');    
})  
 function getJSON(url) {
    var script = document.createElement('script');
    script.setAttribute('src', url);
    script.setAttribute('type', 'text/javascript');
    document.getElementsByTagName('head')[0].appendChild(script);
}
var data
var locations=["804365","44418","766273","2459115","1062617","721943","2122265"]
var imgtext =$(".img-text");
function fetch(url) {
 $.each(locations, function(i) { 
    var yql = "select * from json where url='"+url+locations[i]+"/';";
        setTimeout(function(){
        yql = "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(yql) + "&format=json &callback=cbfunc";
        getJSON(yql);
            setTimeout(function(){
            // $(imgtext[i]).html('<p>'+data.title+'</p>'+'<p>'+Math.ceil(data.consolidated_weather[0].the_temp)+'  ℃</p>'+
            //     '<p>'+data.consolidated_weather[0].weather_state_name+'</p>');
            $(imgtext[i]).html('<p>'+data.title+'</p>'+'<p>'+Math.ceil(data.consolidated_weather[0].the_temp)+'  ℃</p>'+'<img class="weather-icon" src="https://www.metaweather.com/static/img/weather/png/64/'+data.consolidated_weather[0].weather_state_abbr+'.png">');   
            },350);
        },1000 * (i+1));
    });
}
function cbfunc(json) {
    if (json.query.count) {
        data = json.query.results.json;
    } 
}
$('.nav-btn').on('click', function(){
    $('.navbar').toggle();
})
$('.add-item').on('click', function(){
    $(this).before($('<div />', {
        class: 'img-item default',
        text: "",
    })); 
})
    
   
