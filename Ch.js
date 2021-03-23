function fun(){  
var birthyear = prompt("Enter your birthyear!");  
var days = (2021-birthyear)*365; 
if(birthyear == null){ 
    days = "No birthday given";
}    
var h1 = document.createElement('h1'); 
var textAnswer = document.createTextNode("You are"+" "+ days +" "+ "days old"); 
h1.setAttribute("id","Yo"); 
h1.appendChild(textAnswer); 
document.getElementById("flex-box-result").appendChild(h1);   
} 
function reset(){ 
    document.getElementById("Yo").remove(); 
}   
function gencat(){ 
    var image = document.createElement('img'); 
    image.src ="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"; 
    document.getElementById("flexcat").appendChild(image); 
} 
//challenge 3 
function rpsgame(yourchoice){  
    var arr = ['rock','paper','scissor']  
    console.log(yourchoice); 
    var humanchoice, botchoice; 
    humanchoice = yourchoice.id;
    console.log(humanchoice); 
    botchoice = numbertochoice(randrps()); 
    console.log(botchoice);
    results = decidewinner(humanchoice, botchoice)  
    console.log(results); 
    rpsfrontend(humanchoice, botchoice,results); 

} 
function randrps(){ 
    return Math.floor(Math.random()*3);
} 
function numbertochoice(number){ 
    return['rock','paper','scissor'][number];
}  
function decidewinner(humanchoice, botchoice){ 
    var arr = ['rock','paper','scissor']; 
    Hindex = arr.indexOf(humanchoice); 
    Bindex = arr.indexOf(botchoice);  
    if (humanchoice == 'scissor' && botchoice == 'rock'){ 
        return{'message':'you lost','color':'red'}; 
    }
    else if (Hindex == Bindex){ 
        return{'message':'it is a draw','color':'yellow'}; 
    }
    else if(Hindex > Bindex|| (humanchoice == "rock" && botchoice == "scissor")){ 
        return{'message':'you win!','color':'green'};
    }  
    else{ 
        return{'message':'you lost','color':'red'}; 
    } 

} 
function rpsfrontend(humanchoice, botchoice, results){ 
   
    var imgdatabase = { 
        "rock" : document.getElementById("rock").src,
        "paper":document.getElementById("paper").src,
        "scissor":document.getElementById("scissor").src

    }
    document.getElementById('rock').remove() 
    document.getElementById('paper').remove() 
    document.getElementById('scissor').remove() 
    
    var humandiv = document.createElement('div'); 
    var botdiv = document.createElement('div'); 
    var messagediv = document.createElement('div'); 
    humandiv.innerHTML = "<img src='"+imgdatabase[humanchoice]+"'height=150 widht=150>"; 
    console.log(humandiv); 
    /*console.log(botdiv); 
    console.log(messagediv);*/
    document.getElementsByClassName("rp").appendChild(humandiv);
}

 




 

  


