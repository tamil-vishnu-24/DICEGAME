var user_1 = "user 1" ;
var user_2 = "user 2" ;

//To change the names
function editnames()
{
    user_1 = prompt("Enter player1 name");
    user_2 = prompt("Enter player2 name");

    document.querySelector(".user1").innerHTML = user_1;
    document.querySelector(".user2").innerHTML = user_2;
}
function Rolldice()
{
    var rollno1 = Math.floor((Math.random()*6)+1);
    var rollno2 = Math.floor((Math.random()*6)+1);
    document.querySelector("#img1").setAttribute("src" ,"Dice images/dice"+rollno1+".png") ;
    document.querySelector("#img2").setAttribute("src" ,"Dice images/dice"+rollno2+".png") ;
    //var image1 = document.querySelectorAll("img")[0].setAttribute("src" ,"C:\Users\vishn\OneDrive\Desktop\Web development\DOM\Dice images\Dice"+ rollno1 +".png");
    //document.querySelectorAll("img")[1].setAttribute("src" ,"C:\Users\vishn\OneDrive\Desktop\Web development\DOM\Dice images\Dice"+ rollno2 +".png");
    document.querySelectorAll("img")[0].setAttribute("alt" , "OOPS!! DICE IMAGE IS NOT DISPLAYED."+user_1+" got the number "+rollno1);
    document.querySelectorAll("img")[1].setAttribute("alt" , "OOPS!! DICE IMAGE IS NOT DISPLAYED."+user_2+" got the number "+rollno2);
    if ( rollno1 === rollno2 )
    {
        document.querySelector("#h1").innerHTML = "DRAW!!";
    }
    else if (rollno1 > rollno2)
    {
        document.querySelector("#h1").innerHTML = ( user_1 + " WINS!!") ;
    }
    else{
        document.querySelector("#h1").innerHTML = ( user_2 + " WINS!!") ;
    }
}
function Auto()
{
    timer = setInterval(Rolldice , 2500);
}
function Manual()
{
    clearTimeout(timer);
}
