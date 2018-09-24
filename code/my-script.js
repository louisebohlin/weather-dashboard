fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=ae7f18bdb699e35f5dd3399dba9247c1")
  .then((response) => {
    console.log(response)
    return response.json()
  }).then((data) => {

    console.log(data)

    const city = data.name
    console.log(city)

    const temperature = data.main.temp.toFixed(1)
    console.log(temperature)

    if (temperature > 25) {
      document.body.style.backgroundColor = "red"
    } else if (temperature < 0) {
      document.body.style.backgroundColor = "lightblue"
    } else {}


    const weather = data.weather[0].description
    console.log(weather)

    document.getElementById("cityname").innerHTML = city

    document.getElementById("temperature").innerHTML = temperature + "&degC"

    document.getElementById("weathertype").innerHTML = weather

  })
