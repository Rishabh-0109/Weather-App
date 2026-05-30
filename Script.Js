
const apiKey = "1ec23780947912d9ee8eac58aeab682a";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  const city = document.getElementById("city").value;

  if(city ===""){
    alert("Please enter city name");
    return;
  }

  getWeather(city);
});

async function getWeather(city){

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try{

    const response = await fetch(apiURL);

    if(!response.ok){
      alert("City not found");
      return;
    }

    const data = await response.json();

    document.getElementById("temp").innerHTML =
      `${Math.round(data.main.temp)}°C`;

    document.getElementById("cityName").innerHTML =
      data.name;

    document.getElementById("description").innerHTML =
      data.weather[0].description;

    document.getElementById("humidity").innerHTML =
      `${data.main.humidity}%`;

    document.getElementById("wind").innerHTML =
      `${data.wind.speed} km/h`;

    const icon = data.weather[0].icon;

    document.getElementById("weatherIcon").src =
      `https://openweathermap.org/img/wn/${icon}@2x.png`;

  }

  catch(error){
    console.log(error);
    alert("Something went wrong");
  }

}
