let imgs = ["/images/dice1.png", "/images/dice2.png", "/images/dice3.png", "/images/dice4.png", "/images/dice5.png", "/images/dice6.png"];

let a = Math.random() * 6;
let b = Math.random() * 6;
a = Math.floor(a);
b = Math.floor(b);

document.querySelector(".img1").setAttribute("src", imgs[a]);
document.querySelector(".img2").setAttribute("src", imgs[b]);

if (a > b){
    document.querySelector("h1").innerText = "Player 1 Wins 🚩";
}
else if (a < b){
    document.querySelector("h1").innerText = "Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").innerText = "It's a tie";
}