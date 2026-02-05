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
}