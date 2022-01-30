let canvas=document.getElementById('snake');
let cxt=canvas.getContext('2d');
let box=32;

function makeBG() {
 cxt.fillStyle='lightgreen';
 cxt.fillRect(0,0,16*box,16*box)
}

makeBG();