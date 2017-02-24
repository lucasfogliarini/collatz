function odd(x){
  return x * 3 + 1;
}

function even(x){
    return x/2;
}

function just(x){
   var _even = x % 2 == 0;
   if(_even)
      return even(x);
   else
      return odd(x);
}

function collatz(initNumber, endNumber){
  var number = initNumber;
  var iterations = 0;
  var higher = 0;
  while (number > endNumber) {
    iterations = iterations + 1;
    number = just(number);
    if(number > higher)
      higher = number;
  }
  return {
    number: initNumber,
    iterations: iterations,
    higher: higher
  };
}

function higherIteration(x, y){
  var higher = { iterations: 0 };
  for (var i = x; i < y; i++) {
    var current = collatz(i, 1);
    if (current.iterations > higher.iterations) {
       higher = current;
    }
  }
  return higher;
}
