let cursor = document.getElementById('followAni');

let mouseX = 0,
    mouseY = 0;
let followX = 0,
    followY = 0;

document.body.addEventListener('mousemove', function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
})

function tick() {
    requestAnimationFrame(tick);
    followX += (mouseX - followX)*0.1;
    followY += (mouseY - followY)*0.12;
    cursor.style.transform = `translate(${followX}px, ${followY}px)`;
}
tick();