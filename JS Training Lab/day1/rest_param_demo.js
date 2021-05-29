
// ... --> rest parameter
function add(...input){
    let total = 0
    for(const a of input){
        total += a;
    }
    return total
}

console.log(add(1, 2, 3, 4))