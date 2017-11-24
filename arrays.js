var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){

  array=[element, ...array];
  return array;

}

function destructivelyAddElementToBeginningOfArray(array, element){

  array.unshift(element);
  return array;

}

function addElementToEndOfArray(array, element){
  return [...array, element];
  
}

function destructivelyRemoveElementFromEndOfArray(array, element){
  array.push(element);
  return array;
}
