const messageSend = document.getElementById("send-icon");
const inputField = document.getElementById("message-box");
const nameInput = document.getElementById("input-name");


messageSend.addEventListener("click", function(){
    console.log(inputField.value);
    inputField.value = "";
    nameInput.value = "";
    alert("Message sent successfully!");
})
