var player = document.getElementById("player");
var block = document.getElementById("block");
var counter=0;

document.addEventListener("keydown", checkJump);

function checkJump(event)
{
    if(event.keyCode == 32 || event.keyCode == 38)
    {
        jump();
    }
}

function jump(){
    if(player.classList == "animate")
    {return}
    player.classList.add("animate");
    setTimeout(function(){
        player.classList.remove("animate");
    },500);
}
setInterval(function() {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<40 && blockLeft>0 && playerTop>=180){
        block.style.animation = "none";
        alert("Score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 2s infinite linear";
    }else{
        counter++;
        document.getElementById("score").innerHTML = Math.floor(counter/100);
    }
}, 10);
var num = 2;
setInterval(function(){
    num -= 0.005;
    block.style.animation = `block ${num}s infinite linear`;
},200)