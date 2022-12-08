//::::::::::::::: Exercice 1: FirstUpperCase

let myStrg = "bonjour "

function firstUpperCase(text) {
    textArray = text.split(" ");
    newText = []
    for (let i = 0; i < textArray.length; i++) {
        newText.push(textArray[i].charAt(0).toUpperCase() + textArray[i].toLowerCase().slice(1, textArray[i].length))
    }
    return newText.join(" ").trim();
}

console.log(firstUpperCase(myStrg));

//:::::::::::::::: Exercice 2: LongestWord

function longestWord(theString) {
    theStringArray = theString.split(" ");
    newString = [];
    for (let x = 0; x < theStringArray.length; x++) {
        newString.push(theStringArray[x].length);
        newString.sort((a, b) => a - b);
    }
    return newString[newString.length - 1];
}

myString = "les comportements"
console.log("Le mot le plus long comporte " + longestWord(myString) + " lettre(s)");

//:::::::::::::::: Exercice 3: LargestNumber
// on peut utiliser Math.max(...arr);
function largestWord(arr) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1];
}

myarr = [20, 32, 97];
console.log(largestWord(myarr));
console.log(largestWord([156, 851, 138]));
console.log(largestWord([357, 195, 759]));


//:::::::::::::::: Exercice 4: ConfirmEnd

let confirmEnd = ((strg, end) => {
    if ((strg.charAt(strg.length - 1)) === end) {
        return true;
    }
    return false
})
console.log(confirmEnd("bonjour", "r"));
console.log(confirmEnd("bonjour", "n"));
//::::::::::::::::  Exercice 5: Tracage

//les tenaires s'écrivent sur la même ligne et ne supportent pas les {}
function truncate (str, num){
    return str.length > num ? str.slice(0, num) + '...' : str;
}

console.log(truncate("bonjour à tous", 5));
console.log(truncate("salut", 8));

//:::::::::::::::: Exercice 6:  Les détectives

// let findElement = (array)=>{
//     let newArray = [];
//     for(i=0;i<array.length;i++){
//         if(array[i]%2 == 0){
//             newArray.push(array[i]);    
//         }
       
//     }
//     return newArray[0];
// }

let findElement = ((array,callback) => {
    return array.filter(callback)[0];
})

console.log(findElement([1, 3, 5, 10,8, 9, 10],function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 6,9],function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9],function(num) { return num % 2 === 0; }));

//:::::::::::::::: Exercice 7: Les perroquets
//pour faire avancer le mot newword = newword+ word
function repeat(word, num){
    newWord ="";
    for(let i=0 ; i<num;i++){
      newWord = newWord + word 
    }
    return newWord;
}
function repeatCorrection(word, num){
    return word.repeat(num);
}
console.log(repeat("abc", 3));
console.log(repeat ("*", 3));
console.log(repeatCorrection ("bonjour", 2));

//:::::::::::::::: Exercice 8: Factorisation

function factorise (number){
    let result = 1;
    for(let i =1; i<= number;i++){
       result *= i;
    }
    return result
}

function factoriel(number){
    if(number === 0){
        return 1
    }
    else{
        return number*factoriel(number-1);
    }
}
function fatorialize(num){
    return Array.from({length:num},(el,index)=>index+1).
    reduce((prec,suiv)=>prec*suiv,1);
}
console.log(factorise(4));
console.log(factoriel(2));
console.log(fatorialize(5))

//:::::::::::::::: Exercice 9: Téléportation et Fusion

function frankenSplice(arr1, arr2, index){   

    return (arr2).slice(0,index).concat(arr1,(arr2).slice(index));

}

let array1 =[1, 2, 3];
let array2=[4, 5];
console.log(frankenSplice(array1, array2, 1));
console.log(array1);
console.log(array2);
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));



//:::::::::::::::: Exercice : générer un  string en tableau en les séparents
let toNumber = Array.from("0123456789 ").map((str)=>Number(str))
console.log(toNumber);

let suiteNumeric = (num)=>{
    let result = [];
    for(let i =0; i<= num;i++){
        result.push(i);
    }
    return result;
}

console.log(suiteNumeric(9))
let number =9;
let num=Array.from({length:number+1},(el,i)=>i);
console.log(num)

function range3(min, max){
    return Array.from({length: (max - min) +1}, function(el,i) {return min + i})
}
console.log(range3(2,5))

//:::::::::::::::: Exercice 10: Faux Videurs

let bouncer = array=>array.filter(Boolean)
console.log(bouncer([7, "ate", "", false, 9]))
console.log(bouncer(["a", "b", "c"]))
console.log(bouncer([false, null, 0, NaN, undefined, ""]))
console.log(bouncer([null, NaN, 1, 2, undefined]))

//:::::::::::::::: Exercice 11: Où devrais-je être

let getIndexToIns = (arr, toInsert)=>{
    arr.push(toInsert);
    arr.sort((a,b)=>a-b);

return arr.indexOf(toInsert)
}
console.log(getIndexToIns([20,3,5],19));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));

//:::::::::::::::: Exercice 12: Mutation

let mutation = ([word1,word2])=>
(word2.toLowerCase()).split("").
                                every((element)=>[...word1.toLowerCase()].
                                includes(element))


console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

function sum(str,...args){
    let sum=0;
    for(let i=0; i<args.length;i++){
       sum += args[i];
    }
    return str + sum;
}

console.log(sum(2,5,4));