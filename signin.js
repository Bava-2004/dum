
let users="bavatharini"
let pass="040105"
function validate(){
    event.preventDefault()
    u=document.getElementById('user').value
    p=document.getElementById('pass').value
    if((users==u) && (pass==p)){        
        alert("Login Valid")      
    }
    else{
        alert("Login InValid")  
    }
}

// var names=["apurva","bava","daksha","aarthi"]
//  var passwor=["appu123","123appu","bava23","dak23"]
//  function sign(){
//      //event.preventDefault()
//      n= document.getElementById('name').value
//     p= document.getElementById('pass').value
//      if(!n){
//          alert("Please enter ur name");
//      }
//      else if(!p){
//         alert("Please enter password");
//      }
//      else{
//              for(var i=0;i<names.length;i++){
//              if(names[i]==n && passwor[i]==p){
//                     alert("Valid")
//                     return ;
//                 }
//              }
//             alert("InValid")               
                 
//      }   
//  }