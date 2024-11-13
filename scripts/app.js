import { countries } from "./countries.js"

const makeCountry = (country) => {
    const container = document.createElement('div') 
    container.classList.add('card-country')

    container.addEventListener('mouseenter', showInfo)

    const imgContainer = document.createElement('img')
    imgContainer.src = country.flag
    imgContainer.alt = country.name

    const nameContainer = document.createElement('h2')
    nameContainer.textContent = country.name

    container.appendChild(imgContainer)
    container.appendChild(nameContainer)

    document.getElementById('section-countries').appendChild(container)

    
}

const renderCountries = () => {
    countries.forEach( country => makeCountry(country)) //country variable real que representa los paises
}

const showInfo = (event) => {
    const currentCountry = event.target.children[1].textContent
    const infoCountry = countries.find(country => country.name === currentCountry)
    console.log(infoCountry);

    const demographics = document.getElementById('demographics')
    demographics.children[0].textContent = infoCountry.name
    demographics.children[1].textContent = infoCountry.capital
    demographics.children[2].textContent = infoCountry.population
}

window.addEventListener('DOMContentLoaded',renderCountries)
//addEventListener agregar un evento 
// funcion por referencia la linea 26
