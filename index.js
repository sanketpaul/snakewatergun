// document.getElementById('container').innerHTML=`Hello sanket how are you`
document.getElementById('container').innerHTML=`Hello sanket`;

let chance=0;
let score=0;

while(chance!==10){


    let option=["snake","water","gun"]
    let user_guess=prompt("snake/water/gun?")
    // console.log(typeof(option))
    let computerguess=option[Math.floor(Math.random()*option.length)]
    // console.log(computerguess)
    if(computerguess=="snake" && user_guess==="snake"){
        alert("noresult")


    }
    else if(computerguess=="snake"&& user_guess=="water"){
        alert("computer win")
    }
    else if(computerguess=="snake" && user_guess=="gun"){
        alert("you win")
        score+=1;
    }
    else if(computerguess=="water" && user_guess=="snake"){
        alert("you win")
        score+=1;
    }
    else if(computerguess=="water" && user_guess=="water"){
        alert("no result both are same")
    }
    else if(computerguess=="water"&& user_guess=="gun"){
        alert("computer win")
    }
    else if(computerguess=="gun"&& user_guess=="snake"){
        alert("computer win")
    }
    else if(computerguess=="gun" && user_guess=="water"){
        alert("you win")
        score+=1;
    }
    else if(computerguess=="gun" && user_guess=="gun"){
        alert("tied")
    }
    chance++;
}
// console.log(chance)
console.log(score)
alert (`your score is ${score} out of 5 chance`)
document.getElementById('container').innerHTML=`<p>your score is ${score}</p>`



  