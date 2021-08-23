// ----------------------------1
var arrayForm =[]
document.getElementById("Name");
document.getElementById("FamName");
document.getElementById("YearOfBirth");
document.getElementById("ID");
document.getElementById("city");
document.getElementById("Btn").onclick = function () {
    for (let i = 0; i < arrayForm.length; i++) {
        for (let j = i+1; j < arrayForm.length; j++) {
           if(arrayForm[i].ID==arrayForm[j].ID){
               
           } document.write(`this is the same id`)
               console.log(`this is the same id`);
        }
    }
 var FORMA= {
     Name: document.getElementById("Name").value.toUpperCase(),
    FamName: document.getElementById("FamName").value.toUpperCase(),
    YearOfBirth: document.getElementById("YearOfBirth").value,
    ID: document.getElementById("ID").value,
    city: document.getElementById("city").value.toUpperCase(),
    TheDate: Date(),
    Hour :Date(),
  }
  arrayForm.push(FORMA)
  console.log(arrayForm);
console.log(`${FORMA.Name},${FORMA.FamName},${FORMA.YearOfBirth},${FORMA.ID},${FORMA.city},${FORMA.TheDate},${FORMA.Hour},`);
document.getElementById("divForm").innerHTML += `<table><tr><th>${FORMA.Name}</th><th>${FORMA.FamName}</th><th>${FORMA.YearOfBirth}</th><th>${FORMA.ID}</th><th>${FORMA.city}</th><th>${FORMA.TheDate}</th><th>${FORMA.Hour}</th></tr></table>`;
};

document.getElementById("newName")
document.getElementById("checkBtn").onclick=function(){
    for (let i = 0; i < arrayForm.length; i++) {
    if(document.getElementById("newName").value==arrayForm[i].Name){
document.getElementById("checkDiv").innerHTML=`${arrayForm[i].Name}${arrayForm[i].FamName}${arrayForm[i].YearOfBirth}${arrayForm[i].ID}${arrayForm[i].city}${arrayForm[i].TheDate}${arrayForm[i].Hour}`;
    }
    else{
        document.getElementById("checkDiv").innerHTML=`You are not in the form`  
    }
     }
}
 
document.getElementById("newId")
document.getElementById("idBtn").onclick=function(){
    for (let i = 0; i < arrayForm.length; i++) {
        if(document.getElementById("newId").value==arrayForm[i].ID){
            document.getElementById("checkDiv").innerHTML=`${arrayForm[i].Name}${arrayForm[i].FamName}${arrayForm[i].YearOfBirth}${arrayForm[i].ID}${arrayForm[i].city}${arrayForm[i].TheDate}${arrayForm[i].Hour}`;
        }
        else{
            
            document.getElementById("checkDiv").innerHTML=`Your ID is not in the system`
        }
    }
}
document.getElementById("body").innerText=new Date()

