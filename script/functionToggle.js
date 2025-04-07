
document.getElementById("cashout-box").style.display = " none "

document.getElementById("add-money-icon").addEventListener("click",function(){
    handleToggle("add-monney-box","block")
    handleToggle("cashout-box","none")
})


document.getElementById("cashout-icone").addEventListener("click",function(){
  
    handleToggle("add-monney-box","none")
    handleToggle("cashout-box","block")
})


// // practise Toggle by function: 

// document.getElementById("cashout-box").style.display = "none";

// document.getElementById("add-money-icon").addEventListener("click",function(){
//     handletoggle("add-monney-box","block")
//     handletoggle("cashout-box","none")
// })
// document.getElementById("cashout-icone").addEventListener("click",function(){
//     handletoggle("cashout-box","block")
//     handletoggle("add-monney-box","none")
// })



