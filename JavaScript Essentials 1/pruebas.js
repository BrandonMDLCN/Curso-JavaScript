let a = (n) => {
    return n > 2 ? n * a(n - 1) : 2
}
debugger;
console.log(a(6));