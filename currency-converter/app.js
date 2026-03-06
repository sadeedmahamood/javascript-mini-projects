// // const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
// const BASE_URL =
// "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");

// for(let select of dropdowns){
//     for(currCode in countryList){
//         let NewOpt = document.createElement("option");
//         NewOpt.innerText = currCode;
//         NewOpt.value = currCode;
//         if(select.name === "from" && currCode === "USD"){
//             NewOpt.selected = "selected";
//         }else if(select.name === "to" && currCode === "INR"){
//             NewOpt.selected = "selected";
//         }
//         select.append(NewOpt);
//     }
//     select.addEventListener("change", (evt)=>{
//         updateFlag(evt.target);
//     });
// }

// const updateFlag = (element) =>{
//     let currCode = element.value;
//     let countryCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
// };

// btn.addEventListener("click",async(evt)=>{
//     evt.preventDefault();
//     let amount = document.querySelector(".amount input");
//     let amtvalue = amount.value;
//     if (amtvalue === "" || amtvalue < 0){
//         amtvalue = 1;
//         amount.value = "1";
//     }
//     console.log(fromCurr,toCurr)
//     const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//     let response = await fetch(URL);
//     console.log(response)
// })


const BASE_URL =
"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for (let select of dropdowns) {
  for (let currCode in countryList) {

    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    }

    if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}


const updateExchangeRate = async () => {

  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;

  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const URL = `${BASE_URL}/usd.json`;

  let response = await fetch(URL);
  let data = await response.json();

  let fromRate = data.usd[fromCurr.value.toLowerCase()];
  let toRate = data.usd[toCurr.value.toLowerCase()];

  let rate = toRate / fromRate;

  let finalAmount = amtVal * rate;

  msg.innerText =
    `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
};


const updateFlag = (element) => {

  let currCode = element.value;
  let countryCode = countryList[currCode];

  let newSrc =
    `https://flagsapi.com/${countryCode}/flat/64.png`;

  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};


btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});


window.addEventListener("load", () => {
  updateExchangeRate();
});