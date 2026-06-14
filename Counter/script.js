let num=0;

function Show(){
    document.getElementById("num").innerText=num;
}

function increase(){
    num++;
    Show();
}

function decrease(){
    num--;
    Show();
}

function reset(){
    num=0;
    Show();
}

Show();
document.getElementById("inc").addEventListener("click",increase);
document.getElementById("dec").addEventListener("click",decrease);
document.getElementById("reset").addEventListener("click",reset);

