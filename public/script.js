let inputField=document.getElementById("input");
let button=document.querySelector("button");
let p=document.querySelector(".result-box p");
let h1=document.querySelector("#first")
let h2=document.querySelector("#second");
let third=document.querySelector("#third");

button.addEventListener("click",()=>{
const UserInput=inputField.value;
const url = `/status/${UserInput}`;
fetch(url)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    h1.textContent=`Code:${data.code}`;
    h2.textContent=`Name:${data.name}`;
    third.textContent=`Category:${data.category}`;
    p.textContent=`Explanation:${data.explanation}`;

})
.catch((error)=>{
    console.log("Error:",error)
})
})
