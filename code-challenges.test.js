// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]
// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// first have to describe the test 
describe("addTwo", () => {
    //write the reuslts of the test here 
    test("returns numbers added with eachother to add number to the index"
   () =>{
       //write the expected outcome 
       expect(addTwo()).toEqual(1, 1, 2, 3, 5, 8, 13, 21, 34, 55)
   } )
    
})


// b) Create the function that makes the test pass.
//i wasnt even sure where to beging with the function. 
//i bielve that i would maybe need a for loop that would go through the whole array adding the numbers together but im not sure.
//ill be taking notes on the review for this




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]
//create the description for the nameo of the test 
describe("sortedOddNums", () =>{
    //describe what im testing 

    test("returns only sorted odd numbers", () =>{
        //describve my expected outcomes 
        expect(sortedOddNums( fullArr1)).toEqual([-9, 7, 9, 199])
        expect(sortedOddNums( fullArr2)).toEqual([-823, 7, 23])
    })
})


// a) Create a test with expect statements for each of the variables provided.



// b) Create the function that makes the test pass.
 
// const oddOnly = (arr) => {
//     let newarr = []
//     for (let i=0; i< arr.length; i++){
//         if(arr[i] % 2 !=0){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }


var testArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]; //declare a var of test array
//expected output = [-9, 7, 9, 199]
function sortedOddNums(arr) // call function sortedOddNums with array
{
    // create and initialize new array for sorted odd numbers to return.
    let retArr=[];

    for (let i in arr)
    {
        //get number array number values 
        let val = arr[i]; 
        if (Number.isInteger(val))
        {
        //get the odd value of the numbers 
            num = parseInt(val); 
            if (val % 2 != 0)
            {
                console.log("push: "+num;
              //add it to the rest of the array 
                retArr.push(parseInt(num));
            }
        }
    }
    // sort and return new array.
    return retArr.sort((a,b)=>{return a-b;})
}
let values = sortedOddNums(testArr);
// got some help from hector on this one 
//tried to undetrstand the code and look through the syllabus but i couldnt find much on it. 
/*
const onlyOdd = (arr) => {
    var newArr = []
    for(let i=0; i< arr.length; i++){
        if(arr[i] % 2 != 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}




function sortedOddNums(num) {    
    if (typeof (num) === 'number' && num % 2 !== 0) {    
        return num;    
    }   
}




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
//with this one i wasnt even sure what the questions was asking and it was too late to reach out to anyone for help. so i tried to write out the test as best as possible. i had the answer but i didnt really understand it so i didnt wanna just copy code without understanding it 
describe("addingNumbs",() => ,{
    test("return array of accumilating sum" () => {
        expect (addingNums).toEqualto(2,6,51,60)
    })
})

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []




// b) Create the function that makes the test pass.
