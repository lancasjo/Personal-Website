const messageSend = document.getElementById("send-icon");
const inputField = document.getElementById("message-box");

messageSend.addEventListener("click", function(){
    console.log(inputField.value);
    inputField.value = "";
})
