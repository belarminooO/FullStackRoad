
function megaSena(num){
  let auxArr = [6, 7, 8, 9];
  let arr = []

  if (!auxArr.includes(num)){
    return arr;
  }else{
    while(arr.length < num){
      let randomNum = Math.floor(Math.random() * 60) + 1;
      if(!arr.includes(randomNum)){
        arr.push(randomNum);
      }
    }
    return arr;
  }
}

console.log(megaSena(8));
