let {hi, buy} ={hi:  "=== One ===",
                buy: "=== End ==="}

const log  = (...args) => {
  console.log.apply(null, args)
}

log (hi)

function *foos() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

for (var x of foos()){
  log(x)
}

log (buy)
