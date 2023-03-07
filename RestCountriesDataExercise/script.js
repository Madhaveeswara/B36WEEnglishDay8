/*

Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
    a.Get all the countries from Asia continent /region using Filter function
    b.Get all the countries with a population of less than 2 lakhs using Filter function
    c.Print the following details name, capital, flag using forEach function
    d.Print the total population of countries using reduce function
    e.Print the country which uses US Dollars as currency.

*/

/******************************************************************** */

//a.Get all the countries from Asia continent /region using Filter function.
// console.log(countriesData);

let asianCountriesResult = countriesData.filter((element) => {
      if(element.continents.indexOf("Asia") >=0 || element.region == "Asia") {
        return element;
      }
});

console.log("asianCountriesResult ::",asianCountriesResult);

/******************************************************************** */

//b.Get all the countries with a population of less than 2 lakhs using Filter function
let countriesWith2LakhsPopulation = countriesData.filter(
    (element) => element.population < 200000
);

console.log("countriesWith2LakhsPopulation ::",countriesWith2LakhsPopulation);


/******************************************************************** */
// c.Print the following details name, capital, flag using forEach function.

console.log(" ********** Print the following details name, capital, flag using forEach function. *****");
countriesData.forEach((country) => {

    console.log("Name :: ",country.name.official,"  ||  Capital :: ",country.capital ? (country.capital)[0] : "", " || Flag :: ",country.flags.png);
     // console.image(country.flags.svg);

})

/******************************************************************** */

// d.Print the total population of countries using reduce function.
const totalPopulation = countriesData.reduce((accumulator, country, index, originalArr) => {
    // console.log("index ::",index);
    // console.log("originalArray ::",originalArr);
    // console.log("Accumulator :: ",accumulator);
    // console.log("Population :: ",country.population);
    // console.log("Final Accumulator :: ",accumulator + country.population);
    return accumulator + country.population;
  
},0);

console.log(" Total Population :: ", totalPopulation);


/******************************************************************** */

// e.Print the country which uses US Dollars as currency.
console.log(" Countries with US Dollars :: ");
countriesData.forEach((country) => {
    let currencyObj = country.currencies;

    for(key in currencyObj){
       if(key == "USD")console.log(country);
    }
});

// Alternate approach to above solution.
// let countriesUSD = countriesData.filter((country) => {
//     let currencyObj = country.currencies;

//     for(key in currencyObj){
//        if(key == "USD") return country;
//     }
// });

// console.log("countriesUSD :: ",countriesUSD);
