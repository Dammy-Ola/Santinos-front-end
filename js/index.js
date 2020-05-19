const how_many = document.querySelector('#how_many');
const cal_total = document.querySelector('#cal_total');
const price = document.querySelector('#price');
const int_price = +price.innerHTML;
console.log(int_price * 2);

how_many.addEventListener('keyup', (e) => {
  console.log(e.target.value);
  cal_total.innerHTML = int_price * e.target.value;
});
