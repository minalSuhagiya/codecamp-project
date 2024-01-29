const userInput = document.getElementById("text-input");
const palindromeBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const divInfoText = document.getElementById("infoText");

let  filterInput
 

palindromeBtn.addEventListener("click", () => {
  
   if (!filterInput) {
      alert("Pleasuee input a val");
      return; 
   }
  let reverseInput =  filterInput.split("").reverse().join("");
  divInfoText.style.display = "block";
//   if(filterInput != reverseInput) {
  
//    return divInfoText.innerHTML = `no,<span>${userInput.value}</span> is not a palindrom`;
//   } else{
//    divInfoText.innerHTML = `yes,<span><strong>${userInput.value}</strong></span> is  a palindrom`;
//   }
   
if (filterInput === reverseInput) {
   divInfoText.innerHTML = `Yes, <span><strong>${userInput.value}</strong></span> is a palindrome.`;
} else {
   divInfoText.innerHTML = `No, <span><strong>${userInput.value}</strong></span> is not a palindrome.`;


}
  resultDiv.innerHTML = divInfoText.innerHTML;
});

userInput.addEventListener("keyup", (event) => {
   
   filterInput =  userInput.value.toLowerCase().replace(/[^A-Za-z0-9]/gi, '');
 if(filterInput){
   return palindromeBtn.classList.add('active');
 } else{
 palindromeBtn.classList.remove('active');
 }
   
});

userInput.addEventListener("keypress", (event) => {
   if (event.key === 'Enter') { 
      palindromeBtn.click();
   }
});

// Clear previous result when new input is detected
userInput.addEventListener("input", () => {
   divInfoText.innerHTML = "";
   resultDiv.innerHTML = "";
});

