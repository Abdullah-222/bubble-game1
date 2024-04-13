function start(){
    var score = 0; // Reset score to zero at the start of each game

    function makeBubble() {
        var clutter = "";
        for (let i = 1; i <= 75; i++) {
            var num = Math.floor(Math.random() * 10);
            clutter += `<div class="circle">${num}</div>`;
        }
        document.querySelector(".bottom").innerHTML = clutter;
    }
    function getScoreZero(){
        score = 0; // Reset score to zero when the game restarts
        document.querySelector("#scoreVal").textContent = 0;
    }
    var tame = 60;
    function runtimer() {
        var timerset = setInterval(function () {
            if (tame > 0) {
                tame--;
                document.querySelector("#time").textContent = tame;
            } else {
                clearInterval(timerset);
                document.querySelector(".bottom").innerHTML = `<h1>GAME OVER</h1> <button id="restartButton" class="button">Start Again</button>`;
                document.getElementById("restartButton").addEventListener("click", function() {
                    getScoreZero();
                    start(); 
                    this.style.display = "none"; 
                });
            }
        }, 1000);
    }
    
    var hitrn = 0;
    function getHit() {
        hitrn = Math.floor(Math.random() * 10);
        document.querySelector("#hitval").textContent = hitrn;
    }
    
    
    function getScore() {
        score += 10;
        document.querySelector("#scoreVal").textContent = score;
    }
    
    document.querySelector(".bottom").addEventListener("click", function(event) {
        if (event.target.classList.contains("circle")) {
            var Num = Number(event.target.textContent);
            if (hitrn === Num) {
                makeBubble();
                getHit();
                getScore();
            }
        }
    });
    
    runtimer();
    makeBubble();
    
    document.getElementById("startButton").style.display = "none";
}

var btn = document.getElementById("startButton");
btn.addEventListener("click", start);
