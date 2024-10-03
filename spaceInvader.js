"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

gitLogo();

function gitLogo() {
	context.beginPath();
	context.rect(105, 140, 300, 300);
	context.fillStyle = "black";
	context.fill();
	context.beginPath();
	context.fillStyle = "#9933FF";

	context.beginPath();
	context.rect(130, 320, 100, 50);
	context.fill();

	context.beginPath();
	context.rect(280, 320, 100, 50);
	context.fill();

	context.beginPath();
	context.rect(180, 220, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(280, 220, 50, 50);
	context.fill();
}
