
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background("#63666d");
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  // background
  var gradient = ["#414b57", "#444e5b", "#46525e", "#495561", "#4c5865", "#4e5b68", "#515f6c", "#54626f", "#566573",
"#596977", "#5c6c7a", "#5e707e", "#617381"];
  let gradient_count = 12;
  for(let i = 0; i <= gradient_count; i++){
    fill(gradient[i]);
    stroke(gradient[i]);

    let gradient_rect_y_pos = height/gradient_count * i;
    rect(width/2, gradient_rect_y_pos, width, height/gradient_count);
  }

  
  draw_pillars();
  draw_hole();

  

  // Keys for piano
  stroke(0);
  strokeWeight(1);
  fill(255);
  let key_count = 18;
  let key_width = width / key_count;
  
  textAlign(CENTER);
  textSize(vocal);
  text(words, width/2, height/3);

  
  for(let i = 0; i <= key_count; i++){
    let key_x_pos = width-(width - ((width/key_count)/2)) + ((width/key_count) * i);
    // I was planning on having different maps for each key, but nothing works. This is the best I'm gonna get.
    var key_height = height-300 + map(other, 0, 100, 0, 25);
    rect(key_x_pos, key_height, key_width, 50);
    fill("#faf8f9");
    stroke(0);
  }

  // Piano body
  fill("#11120d");
  rect(width/2, height - 275, width+10, 50);
  
  stroke("FFFFFF");
  strokeWeight(7);
  line(width/2 - 40, height - 200, width/2 - 30, height - 25);
  line(width/2 + 40, height - 200, width/2 + 30, height - 25);
  line(width/2, height - 200, width/2, height - 25);

  fill("#11120d");
  stroke("#11120d");
  strokeWeight(0.5);
  quad(15, height - 250, 25, height - 25, 55, height - 25, 65, height - 250)
  rect(40, height - 250, 60, 40);
  
  quad(width - 15, height - 250,  width - 25, height - 25, width - 55, height - 25, width -65, height - 250);
  rect(width - 40, height - 250, 60, 40);

  rect(width/2, height - 260, 350, 40);
  rect(width/2, height - 240, 175, 75);

  quad(width/2 - 75, height - 240, width/2 - 65, height - 20, width/2 - 45, height - 20, width/2 - 55, height - 240);
  quad(width/2 + 75, height - 240, width/2 + 65, height - 20, width/2 + 45, height - 20, width/2 + 55, height - 240);
  rect(width/2, height, 130, 50);

  stroke("#11120d");
  fill("#a1925d");
  quad(20, height - 25, 20, height, 60, height, 60, height - 35);
  quad(width - 20, height - 25, width - 20, height, width - 60, height, width - 60, height - 35);


  //Ideas
  // Pillars on the side behind piano to frame it
  // Background gradient from light at the bottom to black at the top
}

function draw_pillars(){
  // left pillar
  fill("#dcddd8");
  stroke("#444540");
  rect(0, height/2, 165, height - 200);

  // left pillar grooves
  stroke("#b7b4aa");
  strokeWeight(20);
  line(0, height - 120, 0, 120);
  line(30, height - 120, 30, 120);
  line(60, height - 120, 60, 120);

  // left intermediate plates
  stroke("#6c6a5e");
  strokeWeight(40);
  line(0, 80, 80, 80);
  line(0, height- 80, 80, height - 80);

  // left plates
  strokeWeight(20);
  line(0, 10, 110, 10);
  line(0, height - 10, 110, height - 10);

  // left intermediate quad
  strokeWeight(1);
  fill("#dcddd8");
  stroke("#444540");
  quad(0, height - 60, 0, height - 20, 110, height - 20, 85, height - 60);
  quad(0, 60, 0, 20, 110, 20, 85, 60);


  // right pillar
  stroke(0);
  stroke("#444540");
  fill("#dcddd8");
  rect(width, height/2, 165, height - 200);

  // right pillar grooves
  stroke("#b7b4aa");
  strokeWeight(20);
  line(width, height - 120, width, 120);
  line(width - 30, height - 120, width - 30, 120);
  line(width - 60, height - 120, width - 60, 120);

  // right intermediate plates
  stroke("#6c6a5e");
  strokeWeight(40);
  line(width, 80, width - 80, 80);
  line(width, height- 80, width - 80, height - 80);

  // right plates
  strokeWeight(20);
  line(width, 10, width - 110, 10);
  line(width, height - 10, width - 110, height - 10);

  // right intermediate quad
  strokeWeight(1);
  fill("#dcddd8");
  stroke("#444540");
  quad(width, height - 60, width, height - 20, width - 110, height - 20, width - 85, height - 60);
  quad(width, 60, width, 20, width - 110, 20, width - 85, 60);
}

function draw_hole(){
  ellipseMode(CENTER);
  fill("#a10e05");
  stroke("#a10e05");
  strokeWeight(3);
  line(width/2 + 23, height - 575, width/2 + 23, height - 660)
  strokeWeight(7);
  line(width/2 + 12, height - 515, width/2 + 12, height - 660)
  strokeWeight(5);
  line(width/2 + 3, height - 545, width/2 + 3, height - 660)
  strokeWeight(8);
  line(width/2 - 2, height - 565, width/2 - 2, height - 660)
  strokeWeight(6);
  line(width/2 - 12, height - 495, width/2 - 12, height - 660)
  strokeWeight(5);
  line(width/2 + 26, height - 505, width/2 + 26, height - 660)

  strokeWeight(0.5);
  ellipse(width/2, height - 690, 150);

  fill(0);
  stroke(0);
  ellipse(width/2, height - 700, 150);
}