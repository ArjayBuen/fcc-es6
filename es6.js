let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
// Here the console will display the value 2, 
// and an error that i is not defined.

function checkScope() {
    let i = 'function scope';
    if (false) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }


const s = [5, 7, 2];
function editInPlace() {
// Only change code below this line

// Using s = [2, 5, 7] would be invalid
s[0]=2;
s[1]=5;
s[2]=7;

// Only change code above this line
}
editInPlace();


function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
   Object.freeze(MATH_CONSTANTS);
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();


  const magic = () =>{
    return new Date();
  };
  
  //this is similar to the code above
  // const magic =()=> new Date();
  
  const doubler = (item) => item * 2; // may omit the parenthesis
  //const doubler = item => item * 2;
  doubler(4);
 // doubler(4) would return the value 8.
  
 const multiplier = (item, multi) => item * multi;
 multiplier(4, 2);
 //multiplier(4, 2) would return the value 8.

  const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };
  //this is similar to the code above
  // const myConcat = (arr1, arr2) => arr1.concat(arr2);
  
  console.log(myConcat([1, 2], [3, 4, 5]));

  const greeting = (name = "Anonymous") => "Hello " + name;

  console.log(greeting("John"));//will display the strings Hello John
  console.log(greeting());//display the default parameter Hello Anonymous

  // Only change code below this line
const increment = (number, value=1) => number + value;
// Only change code above this line


function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2));//would display the strings You have passed 3 arguments
  console.log(howMany("string", null, [1, 2, 3], { }));//would display the strings You have passed 4 arguments

  const sum = (...args) => {
    // const args = [x,y,z];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
//maximus would have a value of 89.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);//display ['JAN', 'FEB', 'MAR', 'APR', 'MAY']


const user = { name: 'John Doe', age: 34 };
const { name, age } = user;
// const name = user.name;
// const age = user.age;

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  const {today,tomorrow} = HIGH_TEMPERATURES;
  // const today = HIGH_TEMPERATURES.today;
  // const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  // Only change code above this line

  const HIGH_TEMPERATURE = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
   const {today:highhToday,tomorrow:highTomorrow}= HIGH_TEMPERATURE;
  // const highToday = HIGH_TEMPERATURES.today;
  // const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
  
  // Only change code above this line

  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    const {today:{low:lowToday, high:highToday}}= LOCAL_FORECAST;
  // const lowToday = LOCAL_FORECAST.today.low;
  // const highToday = LOCAL_FORECAST.today.high;
  
  // Only change code above this line


  const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
//The console will display the values of a and b as 1, 2.

const [d, e,,, c] = [1, 2, 3, 4, 5, 6];
console.log(d, e, c);
//The console will display the values of a, b, and c as 1, 2, 5.

let x = 8, y = 6;
// Only change code below this line
[x,y]=[y,x];//swapping the value

const [q, w, ...arrr] = [1, 2, 3, 4, 5, 7];
console.log(q, w);//display 1, 2
console.log(arrr);//diplay [3, 4, 5, 7]

function removeFirstTwo(list) {
    const[a,b, ...withoutFirstTwo]=list;
    return list=withoutFirstTwo;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);

  const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
  }
  //this is same as code above
  //const profileUpdate =({ name, age, nationality, location }) => {}

  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  // Only change code below this line
  const half = ({max,min}) => (max + min) / 2.0;
  // Only change code above this line
  

  const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  const greeeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  console.log(greeting);
//The console will display the strings Hello, my name is Zodiac Hasbro! and I am 56 years old.

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for(let i=0;i<arr.length;i++){
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  
//   const getMousePosition = (x, y) => ({
//     x: x,
//     y: y
//   }); 
  const getMousePosition = (x, y) => ({ x, y });

  const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {name, age, gender };
    // return {
    //   name: name,
    //   age: age,
    //   gender: gender
    // };
    // Only change code above this line
  };

  const person1 = {
    name: "Taylor",
    sayHello() {//function in object, no need for keyword function
      return `Hello! My name is ${this.name}.`;
    }
  };
  
  // Only change code below this line
  const bicycle = {
    gear: 2,
    setGear (newGear) {
      this.gear = newGear;
    }
    // setGear: function(newGear) {
    //   this.gear = newGear;
    // }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);


  // Explicit constructor
class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
    takeOff() {
      console.log("To " + this.targetPlanet + "!");
    }
  }
  
  // Implicit constructor 
  class Rocket {
    launch() {
      console.log("To the moon!");
    }
  }
  
  const zeus = new SpaceShuttle('Jupiter');
  // prints To Jupiter! in console
  zeus.takeOff();
  
  const atlas = new Rocket();
  // prints To the moon! in console
  atlas.launch();


// Only change code below this line
class Vegetable{
    constructor(name){
      this.name=name;
    }
   }
   // Only change code above this line
   
   const carrot = new Vegetable('carrot');
   console.log(carrot.name); // Should display 'carrot'


