var characterlenth = 8;
var choiceArr = [];
var specialCharArr =["!","@","#","$","%","^","&","(",")","{","}","|","/","<",">"];
var lowerCassArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
var upperCassArr = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArr =["1","2","3","4","5","6","7","8","9","0"];

var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var correctprompts = getPrompts();


  if(correctprompts){
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
   
 
 
  }
}




function generatePassword(){
    var password =" ";
    for(var i = 0; i < characterlenth; i++) {
      var randomIndex = Math.floor(Math.random()* choiceArr .length)
     password= password + choiceArr[randomIndex];

    }
    return password;

}
   function getPrompts(){
    choiceArr = [];

    characterlenth = parseInt(prompt("How mmany Characters Would you like your password to be? (8-128 characters"));

    if(isNaN(characterlenth) || characterlenth < 8 || characterlenth > 128) {
        alert("Character length has to be a number between 8 -128 digits");

        return false;
    }

    if (confirm("Would you like lowercase letters in your password?")) {
        choiceArr= choiceArr.concat(lowerCassArr);

    }
   if (confirm("Would you like uppercase letters in your password?")) {
        choiceArr= choiceArr.concat(upperCassArr);
}
if (confirm("Would you like special characters in your password?")) {
    choiceArr= choiceArr.concat(specialCharArr);
}
if (confirm("Would you like numbers in your password?")) 
    choiceArr= choiceArr.concat(numberArr); {

    }
    
}