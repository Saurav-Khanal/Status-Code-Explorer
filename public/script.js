let inputField=document.getElementById("input");
let button=document.querySelector("button");
let p=document.querySelector(".result-box p");
button.addEventListener("click",()=>{
const UserInput=inputField.value;
const url = `/status/${UserInput}`;
fetch(url)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    p.textContent=data.message;
})
.catch((error)=>{
    console.log("Error:",error)
})
})
