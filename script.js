"use strict";
const inflationCalculator = function () {
  let stapkaNaInflacija = Number(document.querySelector('#inflationRate').value);
  let money = Number (document.querySelector('#money').value);
  let years = Number (document.querySelector('#years').value);
 
  let vrednost = money + (money * (stapkaNaInflacija / 100));
  for (let i = 1; i < years; i++) {
    vrednost += vrednost * (stapkaNaInflacija / 100);
  }
vrednost = vrednost.toFixed(2)
let onClick = document.createElement('div');
onClick.className = 'new-value'
onClick.innerText = `In ${years} years with inflation rate of ${stapkaNaInflacija}% your ${money}EUR will be worth ${vrednost}EUR`;
document.querySelector('.container').appendChild(onClick)

}


