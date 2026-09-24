//1

function checkNum(num) {
  if(num > 0){
    return `${num} E POSITIVO`;
  }else if(num < 0){
    return `${num} E NEGATIVO`;
  }else{
    return `${num} E NEUTRO`;
  }
}

console.log(checkNum(0));

//2
let arr = [1, 2, 3, 4, 5];

function isNumInArr(arr, num){
  if(arr.includes(num)){
    return true;
  }else{
    return false;
  }
}

console.log(isNumInArr(arr, 1));

//3
const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
];

console.log(products.find(i => i.price === 20));

console.log(products.filter(i => i.price < 8));
