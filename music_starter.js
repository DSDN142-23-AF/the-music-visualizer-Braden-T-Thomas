
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background("#DCDCDC");
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  fill("#11120d");
  rect(width/2, height, width+10, 175);
  
  let key_count = 18;
  let key_list = [];

  let key_width = width / key_count;
  let key_push = map(drum, 0, 100, 0, 30);
  let key_height = height-300 + key_push;

  
  
  //fill("#9a4138");
  //rect(width-(width - ((width/key_count)/2)) + ((width/key_count) * 0), height-300, key_width, 50);

  //fill("#3a5889");
  //rect(width-(width - ((width/key_count)/2)) + ((width/key_count) * 1), height-300, key_width, 50);

  //fill("#c3a257");
  //rect(width-(width - ((width/key_count)/2)) + ((width/key_count) * 2), height-300, key_width, 50);

  for(let i = 0; i <= key_count; i++){
    let key_x_pos = width-(width - ((width/key_count)/2)) + ((width/key_count) * i);

    fill("#faf8f9");
    stroke(0);
    key_list.push(rect(key_x_pos, key_height, key_width, 50));
  }

  stroke("#9a4138");
  line(0, height-300, width, height-300);
}