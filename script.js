function convert(){

let dollar = document.getElementById('dollar').value;
let riyal = document.getElementById('riyal').value;
let total = (dollar* 104.80) + (riyal * 28);
let result = document.getElementById('result');

result.innerHTML = (`Total currency in PKR is ${total}`);
}