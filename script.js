//heart
document.getElementById("heart").addEventListener("click",function(e){
  e.preventDefault();
    const count = document.getElementById("heartCount");
    const number = parseInt(count.innerText);
    const newCount = number + 1;
    count.innerText = newCount;
    return newCount;

})
document.getElementById("heart2").addEventListener("click",function(e){
  e.preventDefault();
    const count = document.getElementById("heartCount");
    const number = parseInt(count.innerText);
    const newCount = number + 1;
    count.innerText = newCount;
    return newCount;
})
document.getElementById("heart3").addEventListener("click",function(e){
  e.preventDefault();
    const count = document.getElementById("heartCount");
    const number = parseInt(count.innerText);
    const newCount = number + 1;
    count.innerText = newCount;
    return newCount;

})
document.getElementById("heart4").addEventListener("click",function(e){
  e.preventDefault();
    const count = document.getElementById("heartCount");
    const number = parseInt(count.innerText);
    const newCount = number + 1;
    count.innerText = newCount;
    return newCount;

})
document.getElementById("heart5").addEventListener("click",function(e){
  e.preventDefault();
    const count = document.getElementById("heartCount");
    const number = parseInt(count.innerText);
    const newCount = number + 1;
    count.innerText = newCount;
    return newCount;

})
document.getElementById("heart6").addEventListener("click",function(e){
  e.preventDefault();
    const count = document.getElementById("heartCount");
    const number = parseInt(count.innerText);
    const newCount = number + 1;
    count.innerText = newCount;
    return newCount;

})
document.getElementById("heart7").addEventListener("click",function(e){
  e.preventDefault();
    const count = document.getElementById("heartCount");
    const number = parseInt(count.innerText);
    const newCount = number + 1;
    count.innerText = newCount;
    return newCount;

})
document.getElementById("heart8").addEventListener("click",function(e){
  e.preventDefault();
    const count = document.getElementById("heartCount");
    const number = parseInt(count.innerText);
    const newCount = number + 1;
    count.innerText = newCount;
    return newCount;

})
document.getElementById("heart9").addEventListener("click",function(e){
  e.preventDefault();
    const count = document.getElementById("heartCount");
    const number = parseInt(count.innerText);
    const newCount = number + 1;
    count.innerText = newCount;
    return newCount;

})

//Call Button
document.getElementById("call").addEventListener("click",function(e){
  e.preventDefault();
   const coinNum = document.getElementById("coinCount");
   const count = parseInt(coinNum.innerText);
   const nationalNum = document.getElementById("national").innerText;
   const phoneNum = parseInt(document.getElementById("phone").innerText); 
   if(count >= 20){
       const newCoin = count - 20 ;
       coinNum.innerText = newCoin;
       alert("Calling "+ nationalNum + ":" + phoneNum);
       return newCoin;
   }
   else{
       alert("You don't have sufficient coin to call");
       return count;
   }

})
document.getElementById("call2").addEventListener("click",function(e){
  e.preventDefault();
   const coinNum = document.getElementById("coinCount");
   const count = parseInt(coinNum.innerText);
   const nationalNum = document.getElementById("national2").innerText;
   const phoneNum = parseInt(document.getElementById("phone2").innerText); 
   if(count >= 20){
       const newCoin = count - 20 ;
       coinNum.innerText = newCoin;
       alert("Calling "+ nationalNum + ":" + phoneNum);
       return newCoin;
   }
   else{
       alert("You don't have sufficient coin to call");
       return count;
   }

})

