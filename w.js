const button = document.getElementById("1");
const input = document.getElementById("input");
//const city = document.getElementById("place");

async function getData(city){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=0a1f40912131448fb10101818250406&q=${city}&aqi=yes`)

    return await promise.json();
}

button.addEventListener('click' , async ()=>{
    const value = input.value;
    const result = await getData(value);
    console.log(result);
});