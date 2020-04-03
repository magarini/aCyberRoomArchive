function setup() {
    canvas = createCanvas(innerWidth, innerHeight);
  canvas.position(0, 0);
  canvas.style('z-index','-1');

    let buttons = selectAll('.imgdrag');
for (let i = 0; i < buttons.length; i++) {
    
    buttons[i].position(random(width-100), random(height-100),'relative');
    console.log(buttons[i]);
  }
}