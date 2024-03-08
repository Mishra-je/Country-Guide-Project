const btn = document.getElementById("btn");
const inputdata = document.getElementById("inputdata");
const result = document.querySelector(".result")
btn.addEventListener("click",() =>
{
    let searchdata = inputdata.value;
    // let searchdata ="India";
    const url = `https://restcountries.com/v3.1/name/${searchdata}?fullText=true`;
    // console.log(url);
    async function getData(url)
    {
        const respone = await fetch(url);
        const data = await respone.json();
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        // console.log(data[0].currencies.name ,"(",data[0].currencies.symbol ,")" );
        console.log(Object.keys(data[0].currencies)[0])
        // console.log(data[0].languages);
        console.log(Object.values(data[0].languages).toString().split(",").join(","));
        result.innerHTML=`<img src="${data[0].flags.svg}" class="flag-img"> <h2>${data[0].name.common}</h2>

        <div class="wrapper">
            <h4>Capital: <span style="color:gray">${data[0].capital[0]}</span></h4>
            <h4>Continents:<span style="color:gray">${data[0].continents[0]}</span></h4>
             <h4>Currencies:<span style="color:gray">${Object.keys(data[0].currencies)[0]}</span></h4>
             <h4>Languages:<span style="color:gray">${Object.values(data[0].languages).toString().split(",").join(",")}</span></h4>
             <h4>Population:<span>${data[0].
                population}</span></h4>
           
        </div>`;
    }
    
    getData(url);
    inputdata.value = "";
})



// const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
// console.log(url);


// const url1= "https://restcountries.com/v3.1/name/aruba?fullText=true";
// console.log(url1)