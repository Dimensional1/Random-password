const passwordBox = document.getElementById("password");
const button = document.getElementById("button")
const copy = document.getElementById("copy")


const passwordLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers= "1234567890";
const specialChar= "!@#$%^&*()_+`~}{[]\|-";
const allChar = passwordLength + upperCase + lowerCase + numbers + specialChar; 

button.addEventListener("click",()=>{
let password = "";

password += upperCase[Math.floor(Math.random() * upperCase.length)];
password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
password += numbers[Math.floor(Math.random() * numbers.length)];
password += specialChar[Math.floor(Math.random() * specialChar.length)];

while(passwordLength > password.length){
    password += allChar[Math.floor(Math.random() * allChar.length)]
passwordBox.value = password;
}

copy.addEventListener("click",()=>{
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
})
})