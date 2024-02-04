
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background("#DCDCDC");
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  
  
  let key_count = 18;
  let key_list = [];
  let key_height_list = [];

  let key_width = width / key_count;
  let key_push = map(other, 0, 100, 0, 35);
  

  textAlign(CENTER);
  textSize(vocal);
  text(words, width/2, height/3);
  
  for(let i = 0; i <= key_count; i++){
    let key_x_pos = width-(width - ((width/key_count)/2)) + ((width/key_count) * i);
    var key_height = height-300;

    key_height_list.push(key_height);
    
    
    fill("#faf8f9");
    stroke(0);
    key_list.push(rect(key_x_pos, key_height_list[i], key_width, 50));
  }

  


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


  // Use map to select the keys

  //key_height_list[0] + 50;
  //key_height_list[map(vocals, 0, 100, 0, key_list.length())] + key_push;
  

  //Ideas
  // Pillars on the side behind piano to frame it
  // Background gradient from light at the bottom to black at the top
  // Use a randomizer to assign the keys different maps to have dynamics
}