// var flag=true;
// var inputString;
//
// while(flag){
//     inputString=prompt("Are we there ? ");
//     if (inputString==="yes"||inputString==="YES"||inputString==="Yes"){
//         flag=false;
//         alert("Viola! We finally made it .");
//     }
// }


// better approach

// Version 1

// var answer=prompt("Are we there ?");
//
// while(answer!=="yes"){
//     answer=prompt("Are we there ?");
// }
//
// alert("Viola! Finally we made it .");


// Version 2

// stop at entering any sentence which contains word "yes"


var answer=prompt("Are we there ?");
while(answer.indexOf("yes")===-1) {
    answer = prompt("Are we there ?");
}
alert("Viola! Finally we made it .");