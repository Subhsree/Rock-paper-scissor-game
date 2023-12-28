//accessing all choice divs
let gameitems = document.querySelectorAll(".choice");
//accessing winner div
let message = document.querySelector("#winner");

let userscore = 0;
let computerscore = 0;

let option = ["rock","paper","scissor"];

//funcion for generating computer choice
let computerchoice = () =>
{
    let optionindex = Math.floor(Math.random() * 3);   
    let pcchoice = option[optionindex];
    //console.log(pcchoice);
    return pcchoice;
}
//drawgame 
let drawGame =  () =>
{
    // console.log("draw");
    message.innerHTML ="game was draw . play again ";
};
let showwinner = (userchoice , compchoice) =>
{
    if(userchoice){
        message.innerHTML = `you win ! ${userchoice} beats ${compchoice}`;
    }
    else
    {
        message.innerHTML = `you lose ${compchoice} beats ${userchoice}`;
    }
};

//function for playgame
let playgame = (userchoice) =>
{
    let compchoice = computerchoice();
    // console.log("your choice :"+userchoice);
    // console.log("computer choice :"+compchoice);
    //if both computer and user choose same item
    if(userchoice === compchoice)
    {
        drawGame();
    }
    else
    {
        let userchoice ="true";
        if(userchoice ==="rock")
        {
        //userchoice = rock then  computer choice must be paper / scissor
        userchoice = compchoice === "paper"? false : true;
        }
        else if(userchoice === "paper")
        {
            userchoice = compchoice === "scissor" ? false :true;
        }
        else //scissor
        {
            //rock / paper
            userchoice = compchoice === "rock" ? false : true;
        }
    }
    showwinner(userchoice,compchoice);
}
//accessing each item and when we click an event will be fire
gameitems.forEach( (item) =>{
    item.addEventListener("click",() =>
    {
       // console.log(item);
       let userchoice = item.getAttribute("id");
       playgame(userchoice);
    });
});