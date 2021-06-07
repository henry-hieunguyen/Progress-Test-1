// Bai 1 || 
let input =  prompt("Enter String");
let splitCharArray = input.split('');
let output = "";

    for (let i = splitCharArray.length - 1; i >= 0; i-- ){
        output += splitCharArray[i];
        }
        
        console.log(output);


