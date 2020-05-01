var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function appendKitten ( value){
  return [...kittens,value];
}
function prependKitten(value){
  reuturn [value,...kittens];
}

function destructivelyAppendKitten(value){
  return kittens.push(value);
}
function destructivelyPrependKitten(value){
  return kittens.unshift(value);
}
function destructivelyRemoveLastKitten (){
  return kittens.pop();
}
function destructiveRemoveFirstKitten(){
   const result = kittens.slide();
}
