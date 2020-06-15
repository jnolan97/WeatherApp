
async function getJSON() {
    country = document.getElementsByName('country')[0].value
    zip_code = document.getElementsByName('zip')[0].value
    console.log(country)
    await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip_code},${country}&appid={api_key}`)
        .then(data => data.json())
        .then(rawData => {
            let high = rawData.main.temp_max
            let convert_high = convertTemp(high)
            if(convert_high > 80){
                document.getElementById('temphigh').style.backgroundColor = "#8B0000"
            } else {
                document.getElementById('temphigh').style.backgroundColor = "red"
            }
            document.getElementById('temphigh').innerHTML = convert_high
            let low = rawData.main.temp_min
            let convert_low = convertTemp(low)
            if(convert_low > 75){
                document.getElementById('templow').style.backgroundColor = "#007bff"
            } else {
                document.getElementById('templow').style.backgroundColor = "#00FFFF"
            }
            document.getElementById('templow').innerHTML = convert_low
            let temp = rawData.main.temp
            let convert_temp = convertTemp(temp)
            if(convert_temp > 80){
                document.getElementById('temp').style.backgroundColor = "#8B0000"
            } else {
                document.getElementById('temp').style.backgroundColor = "#007bff"
            }
            document.getElementById('temp').innerHTML = convert_temp
            let humidity = rawData.main.humidity
            document.getElementById('humidity').innerHTML = humidity
            document.getElementById('humidity').style.backgroundColor = "#ffc107"
            if(convert_temp > 75){
           // var dom = document.getElementById('banner')
            document.body.style.backgroundColor = "#8B0000";
            } else{
                // var dom1 = document.getElementById('forecast')
                // dom1.style.backgroundImage = 'linear-gradient(to '
            }
        })
        .catch(error => {
            if (error) {
                alert("Please make sure you are entering a valid country and zip code")
                console.log('An error has occured while getting data')
            }
        })
}

function convertTemp(temp){
    return Math.round(((temp - 273.15)*1.8)+32)
}