// Bai 2 ||
let input = prompt("Enter String");
let charArray = input.split(" ");
let output = "";

function titleCase(charArray) {
    for(let i = 0; i < charArray.length; i++){
        let chars = charArray[i].split("");
        charArray[i] =  charArray[i].replace(chars[0], chars[0].toUpperCase());
        output += " " + charArray[i]};
}

    titleCase(charArray);
    console.log(output);
        