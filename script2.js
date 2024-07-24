const key = "d1500ecb1edc872f50a80ddf6171ac70";

function colocarDadosNaTela(dados) {
    console.log(dados);
    window.document.querySelector(".place").innerHTML = "Weather in " + dados.name;
    window.document.querySelector(".temp").innerHTML = "Temperature now " + Math.floor(dados.main.temp) + "°C";
    window.document.querySelector(".rainy").innerHTML = dados.weather[0].description;
    window.document.querySelector(".maxTemp").innerHTML = "Max Temp " + Math.floor(dados.main.temp_max) + "°C";
    window.document.querySelector(".minTemp").innerHTML = "Min Temp " + Math.floor(dados.main.temp_min) + "°C";
    window.document.querySelector(".humidity").innerHTML = dados.main.humidity + "% humidity";
    window.document.querySelector(".weatherIcon").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric`).then(resposta => resposta.json());
    colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
    const cidade = window.document.querySelector(".cidade").value;
    buscarCidade(cidade);
}