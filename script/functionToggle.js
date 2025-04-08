
document.getElementById("cashout-box").style.display = " none "
document.getElementById("transection-box").style.display = " none "

document.getElementById("add-money-icon").addEventListener("click",function(){
    handleToggle("add-monney-box","block")
    handleToggle("cashout-box","none")
    handleToggle("transection-box","none")
})


document.getElementById("cashout-icone").addEventListener("click",function(){
  
    handleToggle("add-monney-box","none")
    handleToggle("cashout-box","block")
    handleToggle("transection-box","none")
})


document.getElementById("transaction-icon").addEventListener("click",function(){
  
    handleToggle("add-monney-box","none")
    handleToggle("cashout-box","none")
    handleToggle("transection-box","block")

})




