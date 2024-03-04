function kalkulator(a,b,c){
    function wynik(a,b,c){
        if (c === '+'){
            return a + b;
        } else if (c === '-'){
            return a - b;
        } else if (c === '*'){
            return a * b;
        } else if (c === '/'){
            return a / b;
        } else {
          console.log("niepoprawny znak");
        }
    }
  return wynik(a, b, c);
}

console.log(kalkulator(231, 543, '*'));