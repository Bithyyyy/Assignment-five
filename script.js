//Copy Number increase
function copyCountStart(id) {
    // Increase counter
    const countElement = document.getElementById(id);
    const number = parseInt(countElement.innerText);
    const newCount = number + 1;
    countElement.innerText = newCount;

    // Get phone number
    const phoneNum = document.getElementById("phone").innerText;

    // Try modern Clipboard API
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
        // Fallback for older browsers
        fallbackCopy(phoneNum);
    }

    return newCount;
}

// Fallback copy using hidden textarea
function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Number Copied (fallback): " + text);
}

document.getElementById("copyBtn").addEventListener("click", function(e){
    e.preventDefault();
    copyCountStart("copyCount");
});
//Heart Number Increase
function heartCountStart(id){
    const count = document.getElementById(id);
    const number = parseInt(count.innerText);
    const newCount = number + 1;
    count.innerText = newCount;

    return newCount;
}
document.getElementById("heart").addEventListener("click",function(e){
    e.preventDefault();
    heartCountStart("heartCount");
})
//Coin Number Reduce
function coinCountReduce(id){
    const coinNum = document.getElementById(id);
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
    

}
document.getElementById("call").addEventListener("click",function(e){
    e.preventDefault();
    coinCountReduce("coinCount");
})



