function fibonacci(n) {
    var a = 0,
        b = 1;
  for (var i = 2; i <= n; i++) {
    var c = a + b;
        a = b;
        b = c;
  }
  return b;
}
    alert( fibonacci(1) ); 
    alert( fibonacci(2) );
    alert( fibonacci(3) );
    alert( fibonacci(4) ); 
    alert( fibonacci(5) );
    alert( fibonacci(6) );
    alert( fibonacci(7) );
    alert( fibonacci(8) ); 
    alert( fibonacci(9) );
    alert( fibonacci(10) );
    
