const cardNumber = document.querySelector("#cardHolderNumber");
const cardName = document.querySelector("#cardHolderName");
const cardExpMonth = document.querySelector("#cardExMonth");
const cardExpYear = document.querySelector("#cardExYear");
const cardCvc = document.querySelector("#cardCVC");
const button = document.querySelector("button");
let h1 = document.querySelector(".FOCh1");
let frontOfCardName = document.querySelector(".FOCname");
let frontOfCardExpDate = document.querySelector(".FOCexp");
let BackOfCardCvc = document.querySelector(".BOCcvc");
let leftPageAfter = document.querySelector(".form")

button.addEventListener("click", (e)=>{
    h1.textContent = cardNumber.value;
    frontOfCardName.textContent = cardName.value.toUpperCase() ; 
    frontOfCardExpDate.textContent = cardExpMonth.value + "/" + cardExpYear.value;
    BackOfCardCvc.textContent = cardCvc.value;


   if(cardNumber.value === ''){
    cardNumber.classList.add("wrong");
   }else{
    cardNumber.classList.remove("wrong");
   }

   if(cardNumber.value.length < 16){
    cardNumber.classList.add("wrong");
   }else{
    cardNumber.classList.remove("wrong");
   }

   if(cardName.value === ''){
    cardName.classList.add("wrong");
   }else{
    cardName.classList.remove("wrong");
   }

   if(cardExpMonth.value === ''){
    cardExpMonth.classList.add("wrong");
   }else{
    cardExpMonth.classList.remove("wrong");
   }

    if(cardExpYear.value === ''){
    cardExpYear.classList.add("wrong");
   }else{
    cardExpYear.classList.remove("wrong");
   }
   if(cardCvc.value === ''){
    cardCvc.classList.add("wrong");
   }else{
    cardCvc.classList.remove("wrong");
   }

   if(cardNumber.value && cardName.value && cardExpMonth.value && cardExpYear.value && cardCvc.value){
    leftPageAfter.innerHTML ="<h1>Thank You!</h1> <p> We've added your card details</p> <button>Continue</button>" ;
    leftPageAfter.classList.add("thankYouPage");
    
   }else{
    console.log("not complete");
   }
  
})
