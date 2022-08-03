//document.getElementById("tree").style.opacity = "0";
const img = document.createElement("img");
img.src = "./tree.png";
const src = document.getElementById("character");
function change(){
    document.getElementById("seed").style.opacity = "0";
    document.getElementById("tree").style.opacity = "1";
}

const elephant=document.getElementById("character")
let left_value = 0;

function move(){
    left_value += 0.05;
    elephant.style.left = `${left_value}%`;
}

setInterval(move, 50 )