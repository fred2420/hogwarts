alert("Welcome to Hogwarts")
function houses()
{
alert("Gryffindor, Hufflepuff, Ravenclaw and Slyterin")
}
function Information()
{
    alert("Gryffindor is the house which is for courage and strongness. Ravenclaw ist the house for smartness. Huflepuff is the house for help and goodness and Slytherin is the house where the most bad wizards were.")
}
function School_Years()
{
    document.getElementById("Hogwarts").innerText = document.getElementById("FirstName").value;
    //alert(5. Year: ZAG exams,7.Year: Last year) 
}
function ShowName(){
    alert(document.getElementById("Firstname").value)
}

function Hogwarts(){
    alert(document.getElementById("FirstName").value)

}
function Jump() {
document.getElementById("score").innerText += document.getElementById("TB1").value;



let x = parseInt(document.getElementById("TB1").value);
let y=parseInt(document.getElementById("TB2").value);
let Ans=document.getElementById("TB3").value;


if(Ans==x+y)
{
alert("Very Good! Welcome to Gryffindor." )
document.getElementById("Winner").src = "grif.jfif"

}
else{
    alert("You suck. Welcome to Slytherin.:(")
    document.getElementById("Winner").src = "slith.jfif"
}
}