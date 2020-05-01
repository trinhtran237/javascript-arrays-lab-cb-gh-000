var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function appendKitten ( value){
  return [...kittens,value];
}
function destructivelyAppendKitten(value){
  return kittens.push(value);
}
function destructivelyPrependKitten(value){
  return kittens.unshift(value);
}
