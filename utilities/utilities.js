// add monoy and cashout function: 

function getInputValueByID(id) {
    const value = document.getElementById(id).value; 
    const convertedValue = parseFloat(value);
    return convertedValue;
   
}
function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText; 
    const convertedValue = parseFloat(value);
    return convertedValue;
   
}
// function of sum: 

function setInnerTextByIDandvalue (id,value){
    document.getElementById(id).innerText = value;
  
}

// toogle function: 

function handleToggle(id,status){
    document.getElementById(id).style.display = status;

}


// // toogle function practice: 
// function handletoggle (id,status){
//     document.getElementById(id).style.display = status;
// }