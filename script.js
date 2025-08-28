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
document.getElementById("call").addEventListener("click", function(e){
  e.preventDefault();

  const coinNum = document.getElementById("coinCount");
  const count = parseInt(coinNum.innerText);
  const nationalNum = document.getElementById("national").innerText;
  const phoneNum = document.getElementById("phone").innerText; 

  if(count >= 20){
    const newCoin = count - 20 ;
    coinNum.innerText = newCoin;

    alert("Calling " + nationalNum + " : " + phoneNum);
    const now = new Date();
    const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const historyList = document.getElementById("historyList");
    const historyItem = document.createElement("div");
    historyItem.className = "flex items-center justify-between bg-gray-50 p-3 rounded-xl";

    historyItem.innerHTML = `
      <div>
        <p class="font-medium text-gray-700 text-sm">${nationalNum}</p>
        <p class="text-xs text-gray-500">${phoneNum}</p>
      </div>
      <span class="text-xs text-gray-400">${currentTime}</span>
    `;

    historyList.prepend(historyItem); 
    return newCoin;
  } else {
    alert("You don't have sufficient coin to call");
    return count;
  }
});
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
       const now = new Date();
    const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const historyList = document.getElementById("historyList");
    const historyItem = document.createElement("div");
    historyItem.className = "flex items-center justify-between bg-gray-50 p-3 rounded-xl";

    historyItem.innerHTML = `
      <div>
        <p class="font-medium text-gray-700 text-sm">${nationalNum}</p>
        <p class="text-xs text-gray-500">${phoneNum}</p>
      </div>
      <span class="text-xs text-gray-400">${currentTime}</span>
    `;

    historyList.prepend(historyItem); 
       return newCoin;
   }
   else{
       alert("You don't have sufficient coin to call");
       return count;
   }

})
document.getElementById("call3").addEventListener("click",function(e){
  e.preventDefault();
   const coinNum = document.getElementById("coinCount");
   const count = parseInt(coinNum.innerText);
   const nationalNum = document.getElementById("national3").innerText;
   const phoneNum = parseInt(document.getElementById("phone3").innerText); 
   if(count >= 20){
       const newCoin = count - 20 ;
       coinNum.innerText = newCoin;
       alert("Calling "+ nationalNum + ":" + phoneNum);
       const now = new Date();
    const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const historyList = document.getElementById("historyList");
    const historyItem = document.createElement("div");
    historyItem.className = "flex items-center justify-between bg-gray-50 p-3 rounded-xl";

    historyItem.innerHTML = `
      <div>
        <p class="font-medium text-gray-700 text-sm">${nationalNum}</p>
        <p class="text-xs text-gray-500">${phoneNum}</p>
      </div>
      <span class="text-xs text-gray-400">${currentTime}</span>
    `;

    historyList.prepend(historyItem); 
       return newCoin;
   }
   else{
       alert("You don't have sufficient coin to call");
       return count;
   }

})
document.getElementById("call4").addEventListener("click",function(e){
  e.preventDefault();
   const coinNum = document.getElementById("coinCount");
   const count = parseInt(coinNum.innerText);
   const nationalNum = document.getElementById("national4").innerText;
   const phoneNum = parseInt(document.getElementById("phone4").innerText); 
   if(count >= 20){
       const newCoin = count - 20 ;
       coinNum.innerText = newCoin;
       alert("Calling "+ nationalNum + ":" + phoneNum);
       const now = new Date();
    const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const historyList = document.getElementById("historyList");
    const historyItem = document.createElement("div");
    historyItem.className = "flex items-center justify-between bg-gray-50 p-3 rounded-xl";

    historyItem.innerHTML = `
      <div>
        <p class="font-medium text-gray-700 text-sm">${nationalNum}</p>
        <p class="text-xs text-gray-500">${phoneNum}</p>
      </div>
      <span class="text-xs text-gray-400">${currentTime}</span>
    `;

    historyList.prepend(historyItem); 
       return newCoin;
   }
   else{
       alert("You don't have sufficient coin to call");
       return count;
   }

})
document.getElementById("call5").addEventListener("click",function(e){
  e.preventDefault();
   const coinNum = document.getElementById("coinCount");
   const count = parseInt(coinNum.innerText);
   const nationalNum = document.getElementById("national5").innerText;
   const phoneNum = parseInt(document.getElementById("phone5").innerText); 
   if(count >= 20){
       const newCoin = count - 20 ;
       coinNum.innerText = newCoin;
       alert("Calling "+ nationalNum + ":" + phoneNum);
       const now = new Date();
    const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const historyList = document.getElementById("historyList");
    const historyItem = document.createElement("div");
    historyItem.className = "flex items-center justify-between bg-gray-50 p-3 rounded-xl";

    historyItem.innerHTML = `
      <div>
        <p class="font-medium text-gray-700 text-sm">${nationalNum}</p>
        <p class="text-xs text-gray-500">${phoneNum}</p>
      </div>
      <span class="text-xs text-gray-400">${currentTime}</span>
    `;

    historyList.prepend(historyItem); 
       return newCoin;
   }
   else{
       alert("You don't have sufficient coin to call");
       return count;
   }

})
document.getElementById("call6").addEventListener("click",function(e){
  e.preventDefault();
   const coinNum = document.getElementById("coinCount");
   const count = parseInt(coinNum.innerText);
   const nationalNum = document.getElementById("national6").innerText;
   const phoneNum = parseInt(document.getElementById("phone6").innerText); 
   if(count >= 20){
       const newCoin = count - 20 ;
       coinNum.innerText = newCoin;
       alert("Calling "+ nationalNum + ":" + phoneNum);
       const now = new Date();
    const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const historyList = document.getElementById("historyList");
    const historyItem = document.createElement("div");
    historyItem.className = "flex items-center justify-between bg-gray-50 p-3 rounded-xl";

    historyItem.innerHTML = `
      <div>
        <p class="font-medium text-gray-700 text-sm">${nationalNum}</p>
        <p class="text-xs text-gray-500">${phoneNum}</p>
      </div>
      <span class="text-xs text-gray-400">${currentTime}</span>
    `;

    historyList.prepend(historyItem); 
       return newCoin;
   }
   else{
       alert("You don't have sufficient coin to call");
       return count;
   }

})
document.getElementById("call7").addEventListener("click",function(e){
  e.preventDefault();
   const coinNum = document.getElementById("coinCount");
   const count = parseInt(coinNum.innerText);
   const nationalNum = document.getElementById("national7").innerText;
   const phoneNum = parseInt(document.getElementById("phone7").innerText); 
   if(count >= 20){
       const newCoin = count - 20 ;
       coinNum.innerText = newCoin;
       alert("Calling "+ nationalNum + ":" + phoneNum);
       const now = new Date();
    const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const historyList = document.getElementById("historyList");
    const historyItem = document.createElement("div");
    historyItem.className = "flex items-center justify-between bg-gray-50 p-3 rounded-xl";

    historyItem.innerHTML = `
      <div>
        <p class="font-medium text-gray-700 text-sm">${nationalNum}</p>
        <p class="text-xs text-gray-500">${phoneNum}</p>
      </div>
      <span class="text-xs text-gray-400">${currentTime}</span>
    `;

    historyList.prepend(historyItem); 
       return newCoin;
   }
   else{
       alert("You don't have sufficient coin to call");
       return count;
   }

})
document.getElementById("call8").addEventListener("click",function(e){
  e.preventDefault();
   const coinNum = document.getElementById("coinCount");
   const count = parseInt(coinNum.innerText);
   const nationalNum = document.getElementById("national8").innerText;
   const phoneNum = parseInt(document.getElementById("phone8").innerText); 
   if(count >= 20){
       const newCoin = count - 20 ;
       coinNum.innerText = newCoin;
       alert("Calling "+ nationalNum + ":" + phoneNum);
       const now = new Date();
    const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const historyList = document.getElementById("historyList");
    const historyItem = document.createElement("div");
    historyItem.className = "flex items-center justify-between bg-gray-50 p-3 rounded-xl";

    historyItem.innerHTML = `
      <div>
        <p class="font-medium text-gray-700 text-sm">${nationalNum}</p>
        <p class="text-xs text-gray-500">${phoneNum}</p>
      </div>
      <span class="text-xs text-gray-400">${currentTime}</span>
    `;

    historyList.prepend(historyItem); 
       return newCoin;
   }
   else{
       alert("You don't have sufficient coin to call");
       return count;
   }

})
document.getElementById("call9").addEventListener("click",function(e){
  e.preventDefault();
   const coinNum = document.getElementById("coinCount");
   const count = parseInt(coinNum.innerText);
   const nationalNum = document.getElementById("national9").innerText;
   const phoneNum = parseInt(document.getElementById("phone9").innerText); 
   if(count >= 20){
       const newCoin = count - 20 ;
       coinNum.innerText = newCoin;
       alert("Calling "+ nationalNum + ":" + phoneNum);
       const now = new Date();
    const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const historyList = document.getElementById("historyList");
    const historyItem = document.createElement("div");
    historyItem.className = "flex items-center justify-between bg-gray-50 p-3 rounded-xl";

    historyItem.innerHTML = `
      <div>
        <p class="font-medium text-gray-700 text-sm">${nationalNum}</p>
        <p class="text-xs text-gray-500">${phoneNum}</p>
      </div>
      <span class="text-xs text-gray-400">${currentTime}</span>
    `;

    historyList.prepend(historyItem); 
       return newCoin;
   }
   else{
       alert("You don't have sufficient coin to call");
       return count;
   }

})

//Copy
document.getElementById("copyBtn").addEventListener("click", function(e){
  e.preventDefault();
  const countElement = document.getElementById("copyCount");
  const number = parseInt(countElement.innerText);
  const newCount = number + 1;
  countElement.innerText = newCount;

  const phoneNum = document.getElementById("phone").innerText;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(phoneNum)
      .then(() => {
        alert("Number Copied: " + phoneNum);
      })
      .catch(err => {
        console.error("Clipboard API failed, fallback to textarea", err);
        fallbackCopy(phoneNum);
      });
  } else {
    fallbackCopy(phoneNum);
  }
  return newCount;
});
function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Number Copied (fallback): " + text);
}
document.getElementById("copyBtn2").addEventListener("click", function(e){
  e.preventDefault();
  const countElement = document.getElementById("copyCount");
  const number = parseInt(countElement.innerText);
  const newCount = number + 1;
  countElement.innerText = newCount;

  const phoneNum = document.getElementById("phone2").innerText;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(phoneNum)
      .then(() => {
        alert("Number Copied: " + phoneNum);
      })
      .catch(err => {
        console.error("Clipboard API failed, fallback to textarea", err);
        fallbackCopy(phoneNum);
      });
  } else {
    fallbackCopy(phoneNum);
  }
  return newCount;
});
document.getElementById("copyBtn3").addEventListener("click", function(e){
  e.preventDefault();
  const countElement = document.getElementById("copyCount");
  const number = parseInt(countElement.innerText);
  const newCount = number + 1;
  countElement.innerText = newCount;

  const phoneNum = document.getElementById("phone3").innerText;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(phoneNum)
      .then(() => {
        alert("Number Copied: " + phoneNum);
      })
      .catch(err => {
        console.error("Clipboard API failed, fallback to textarea", err);
        fallbackCopy(phoneNum);
      });
  } else {
    fallbackCopy(phoneNum);
  }
  return newCount;
});
document.getElementById("copyBtn4").addEventListener("click", function(e){
  e.preventDefault();
  const countElement = document.getElementById("copyCount");
  const number = parseInt(countElement.innerText);
  const newCount = number + 1;
  countElement.innerText = newCount;

  const phoneNum = document.getElementById("phone4").innerText;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(phoneNum)
      .then(() => {
        alert("Number Copied: " + phoneNum);
      })
      .catch(err => {
        console.error("Clipboard API failed, fallback to textarea", err);
        fallbackCopy(phoneNum);
      });
  } else {
    fallbackCopy(phoneNum);
  }
  return newCount;
});
document.getElementById("copyBtn5").addEventListener("click", function(e){
  e.preventDefault();
  const countElement = document.getElementById("copyCount");
  const number = parseInt(countElement.innerText);
  const newCount = number + 1;
  countElement.innerText = newCount;

  const phoneNum = document.getElementById("phone5").innerText;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(phoneNum)
      .then(() => {
        alert("Number Copied: " + phoneNum);
      })
      .catch(err => {
        console.error("Clipboard API failed, fallback to textarea", err);
        fallbackCopy(phoneNum);
      });
  } else {
    fallbackCopy(phoneNum);
  }
  return newCount;
});
document.getElementById("copyBtn6").addEventListener("click", function(e){
  e.preventDefault();
  const countElement = document.getElementById("copyCount");
  const number = parseInt(countElement.innerText);
  const newCount = number + 1;
  countElement.innerText = newCount;

  const phoneNum = document.getElementById("phone6").innerText;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(phoneNum)
      .then(() => {
        alert("Number Copied: " + phoneNum);
      })
      .catch(err => {
        console.error("Clipboard API failed, fallback to textarea", err);
        fallbackCopy(phoneNum);
      });
  } else {
    fallbackCopy(phoneNum);
  }
  return newCount;
});
document.getElementById("copyBtn7").addEventListener("click", function(e){
  e.preventDefault();
  const countElement = document.getElementById("copyCount");
  const number = parseInt(countElement.innerText);
  const newCount = number + 1;
  countElement.innerText = newCount;

  const phoneNum = document.getElementById("phone7").innerText;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(phoneNum)
      .then(() => {
        alert("Number Copied: " + phoneNum);
      })
      .catch(err => {
        console.error("Clipboard API failed, fallback to textarea", err);
        fallbackCopy(phoneNum);
      });
  } else {
    fallbackCopy(phoneNum);
  }
  return newCount;
});
document.getElementById("copyBtn8").addEventListener("click", function(e){
  e.preventDefault();
  const countElement = document.getElementById("copyCount");
  const number = parseInt(countElement.innerText);
  const newCount = number + 1;
  countElement.innerText = newCount;

  const phoneNum = document.getElementById("phone8").innerText;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(phoneNum)
      .then(() => {
        alert("Number Copied: " + phoneNum);
      })
      .catch(err => {
        console.error("Clipboard API failed, fallback to textarea", err);
        fallbackCopy(phoneNum);
      });
  } else {
    fallbackCopy(phoneNum);
  }
  return newCount;
});
document.getElementById("copyBtn9").addEventListener("click", function(e){
  e.preventDefault();
  const countElement = document.getElementById("copyCount");
  const number = parseInt(countElement.innerText);
  const newCount = number + 1;
  countElement.innerText = newCount;

  const phoneNum = document.getElementById("phone9").innerText;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(phoneNum)
      .then(() => {
        alert("Number Copied: " + phoneNum);
      })
      .catch(err => {
        console.error("Clipboard API failed, fallback to textarea", err);
        fallbackCopy(phoneNum);
      });
  } else {
    fallbackCopy(phoneNum);
  }
  return newCount;
});

//clear
document.getElementById("clear").addEventListener("click", function(e){
  e.preventDefault();
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = "";
});







