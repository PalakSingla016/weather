const button = document.getElementById("1");
const time = document.getElementById("time");
const input = document.getElementById("input");
const city = document.getElementById("place");
const temperature = document.getElementById("temp");

async function getData(city){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=0a1f40912131448fb10101818250406&q=${city}&aqi=yes`)

    return await promise.json();
}

button.addEventListener('click' , async ()=>{
    const value = input.value;
    const result = await getData(value);
    console.log(result);

    city.innerText =`${result.location.name}, ${result.location.country}`;
    time.innerText = result.location.localtime;
    temperature.innerText = result.current.temp_c;
});