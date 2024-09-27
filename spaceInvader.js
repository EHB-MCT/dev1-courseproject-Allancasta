"use strict";


let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");



gitLogo();

function gitLogo(){


context.beginPath();


context.fillStyle="#9933FF";

context.beginPath();
context.rect(130, 320, 110, 50);
context.fill();





context.fillStyle="#9933FF";
context.beginPath();
context.rect(350,320,110,50);
context.fill();






context.beginPath();


context.fillStyle="#9933FF";

context.beginPath();
context.rect(180,220,60, 60);
context.fill();





context.fillStyle="#9933FF";
context.beginPath();
context.rect(345,220,60,60);
context.fill();



}