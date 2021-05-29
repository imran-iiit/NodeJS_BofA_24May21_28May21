let add = function(x, y){
    return x+y;
}

let add_arrow=(x, y) => {
    return x+y;
}

let add_arrow1=(x, y) => {return x+y}


console.log(add(1, 2))
console.log(add_arrow(1, 2))
console.log(add_arrow1(1, 2))

let numbers = [4, 6, 8]

numbers.sort(function(a, b){
    return b-a
})

numbers.sort((a, b) => b-a)
console.log(numbers)


function Car(){
    this.speed = 0;

    this.speedUp = function(speed){
        this.speed = speed;
        setTimeout(() => {
            console.log(this.speed)
        }, 1000)
        // setTimeout(function(){  // This returns undefined as ANONYMOUS FN.'s this is undefined
        //     console.log(this.speed)
        // }, 1000)
    }

}

let car = new Car()
car.speedUp(100)