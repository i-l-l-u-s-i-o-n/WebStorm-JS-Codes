var age=prompt("Enter age : ");
age=Number(age); // prompt() always reads String values so we have to convert it to Number type !!!!!!!
if (age<0){
    alert("Error");
} if (age===21){
    alert("Happay 21st Bday !")
} if (age%2!==0){
    alert("Odd age")
} if (Math.sqrt(age)%1===0){
    alert("Viola ! Age is a perfect square.")
}