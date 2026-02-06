// console.log("js loaded!!")

// let apikey = "1e1aeb20d9644597986231058250812";

// let txtCity = document.getElementById("txt_city");

// txtCity.addEventListener("keypress",e=>{
//     if (e.key=="Enter") {
//         apicall(txtCity.value)
        
//     }
// })

// let apicall = (city) =>{
//     fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`)
//     .then(res => res.json())
//     .then(data=>console.log(data)
//     )


let apikey = "a0a82aab60b441c0a7e111104252111";

let txtCity = document.getElementById("txt_city");

txtCity.addEventListener("keypress", e => {
    if (e.key == "Enter") {
        apiCall(txtCity.value)
    }
})


let apiCall = async (city) => {
    try {
        await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert("City not found!");
            } else {
                setWeather(data);
            }
        })
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please try again.");
    }
}

let setWeather = (data) =>{
    let city = document.getElementById("city_name");
    let country = document.getElementById("country_name");

let main_temparature = document.getElementById("main_temparature");
    let sub_main_temparature = document.getElementById("sub_main_temparature");
    let temparature_feel_like = document.getElementById("temparature_feel_like");
    
    
    let status = document.getElementById("status");
    let main_status_image = document.getElementById("main_status_image");
    let date = document.getElementById("date");

    // Other weather details
    let wind_speed_value = document.getElementById("wind_speed_value");
    let humidity_value = document.getElementById("humidity_value");
    let cloud_cover_value = document.getElementById("cloud_cover_value");
    let uv_index_value = document.getElementById("uv_index_value");
    let pressure_value = document.getElementById("pressure_value");
    let visibility_value = document.getElementById("visibility_value");

    // Sun times (Note: current.json doesn't provide sunrise/sunset, would need forecast API)
    let sun_rise_time = document.getElementById("sun_rise_time");
    let sun_set_time = document.getElementById("sun_set_time");

    // Set location data
    city.innerText = data.location.name;
    country.innerText = data.location.country;

    // Set temperature data
    main_temparature.innerHTML = Math.round(data.current.temp_c) + ' <span>℃</span>';
    sub_main_temparature.innerHTML = Math.round(data.current.temp_c) + ' <span>℃</span>';
    temparature_feel_like.innerHTML = Math.round(data.current.feelslike_c) + ' <span>℃</span>';

    // Set weather status
    status.innerText = data.current.condition.text;
    main_status_image.src = data.current.condition.icon;

    // Set date
    let localTime = new Date(data.location.localtime);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date.innerText = localTime.toLocaleDateString('en-US', options);

    
    // UV Index with descriptive text
    let uvIndex = data.current.uv;
    let uvDescription;
    if (uvIndex <= 2) uvDescription = "Low";
    else if (uvIndex <= 5) uvDescription = "Moderate";
    else if (uvIndex <= 7) uvDescription = "High";
    else if (uvIndex <= 10) uvDescription = "Very High";
    else uvDescription = "Extreme";
    uv_index_value.innerText = uvIndex + ' (' + uvDescription + ')';

    pressure_value.innerHTML = data.current.pressure_mb + ' <span>hPa</span>';
    visibility_value.innerHTML = data.current.vis_km + ' <span>km</span>';

    sun_rise_time.innerText = "N/A";
    sun_set_time.innerText = "N/A";
}
window.addEventListener('load', () => {
    apiCall('Colombo');
});