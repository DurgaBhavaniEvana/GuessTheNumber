var random=Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById('b1').addEventListener('click',function(){

    attempts++;
    var guess=parseInt(document.getElementById('num').value);
    if(guess===random){
        display("Congratulation"+attempts);
        document.getElementById('b1').disabled=true;
    }
    else if(guess<random){
        display("Too low ,try again");
    }
    else if(guess>random){
        display("Too high,try again");
    }
});
function display(message){
    document.getElementById("msg").textContent=message;
}