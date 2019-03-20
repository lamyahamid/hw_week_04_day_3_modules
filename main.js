// function sayHello(name){
//     console.log(`Hi, ${name}!`)
// }

const sayHello=(name)=>console.log(`Hi, ${name}!`)

let getOlder=age=> {return age+50} 

//____________________________________________________



// const multiply = (num1, num2) => console.log(num1 * num2); 

// const subtractFive = (num) => {
//     const diff = 5 - num;
// 	console.log(diff);
// }

// const printName = name = function() {
//     console.log(name)
// }



//_____________________________________________________

module.exports = {
    hi: sayHello,
    older: getOlder
}

