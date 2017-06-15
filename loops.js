function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if (i === 1){
      array = [...array, 'I am 1 strange loop.']
    }
    else{
      array = [...array, `I am ${i} strange loops.`]
    }
  }
}

function whileLoop(number){
  while (number > 0){
    console.log(number--)
  }
  if (number === 0 ){
    console.log("done")
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.pop()
  } while (maybeTrue())
}
