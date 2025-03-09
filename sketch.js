let avgRent = [];
let s = 'Student Apartment';
let n = 'Non Student Apartment';
let x = 'Average Rent in Austin, 2013 and 2018';
let y = 'Cost ($) of Rent in Austin Per Month';
let t = 'The High and Increasing Costs of Student Apartments in Austin';
let d = 'Hover over bars to see exact dollar costs';
let angleRotate = 0.0;
let a;
let b;
let hoverLight;
let hoverDark;
let outlineColor;
let barHoverA = false; // boolean for color change when overing over first bar
let barHoverB = false; // boolean for color change when overing over third bar
let barHoverC = false; // boolean for color change when overing over second bar
let barHoverD = false; // boolean for color change when overing over last bar

/* loading dataset to use in program */
function preload(){
  table = loadTable('rentgrowthdata.csv', 'csv', 'header');
}

/* setup and defining variables */
function setup() {
  // Resize the canvas to a smaller size
  let newWidth = 1750 * 0.25; // Scale width to 25% of the original size
  let newHeight = 2650 * 0.25; // Scale height to 25% of the original size
  resizeCanvas(newWidth, newHeight); // Apply the new canvas size

  numRows = table.getRowCount(); // counts the rows of dataset
  numColumns = table.getColumnCount(); // counts the columns of dataset
  a = color(207, 149, 114); // lighter orange used for 'Non Student Housing'
  b = color(212, 123, 80); // darker orange used for 'Student Housing'
  hoverLight = color(184, 129, 95); // hover color used for 'Non Student Housing'
  hoverDark = color(191, 105, 63); // hover color used for 'Student Housing'
  outlineColor = color(168, 74, 50); // outline color used for lines
}

/* is mouse over rectangle bars? */
function mouseHover() {
  /* hover color change when mouse is over rectangle bars */
  
  // mouse over 2013 'Non Student Apartment' bar
  if(mouseX >= 450 && mouseX <= 450 + 120 && mouseY >= 1410 && mouseY <= 2450){ 
    barHoverA = true;
  } else {
    barHoverA = false;
  }
  
  // mouse over 2018 'Non Student Apartment' bar
  if(mouseX >= 700 && mouseX <= 700 + 120 && mouseY >= 1150 && mouseY<= 2450){
    barHoverC = true;
  } else {
    barHoverC = false;
  }
  
  // mouse over 2013 'Student Apartment' bar
  if(mouseX >= 1000 && mouseX <= 1000 + 120 && mouseY >= 557 && mouseY <= 2450){
    barHoverB = true;
  } else {
    barHoverB = false;
  }
  
  // mouse over 2018 'Student Apartment' bar
  if(mouseX >= 1250 && mouseX <= 1250 + 120 && mouseY >= 103 && mouseY <= 2450){
    barHoverD = true;
  } else {
    barHoverD = false;
  }
}

/* Draw the graph */
function draw() {
  background(219, 201, 162);

  // Apply scaling factor after all drawing commands
  push();
  let scaleFactor = 0.25; // This shrinks the output to 25% of the original size
  scale(scaleFactor);

  // Graph Title
  textSize(50);
  fill(a);
  stroke(outlineColor);
  strokeWeight(4);
  text(t, 300, 50);
  
  // Title Description
  fill(255);
  noStroke();
  rect(497, 70, 590, 50);
  textSize(35);
  fill(a);
  stroke(a);
  strokeWeight(3);
  text(d, 510, 105);

  // 'Non Student Apartment' data
  for (var i = 0; i < numRows; i++) {
    /* 'Student Apartment' data */
    for (var j = 0; j < numRows; j++) {
      // Non Student Apartment 2013 Bar
      if(barHoverA === true) { 
        textSize(40);
        noFill();
        strokeWeight(2);
        text('$1040', 460, 1400);
        fill(hoverLight); 
      } else { 
        fill(a);
      }
      stroke(outlineColor);
      strokeWeight(3);
      rect(450, 1410, 120, 1040); // Non Student Apartment 2013 bar

      // Non Student Apartment 2018 Bar
      if(barHoverC === true) { 
        textSize(40);
        noFill();
        strokeWeight(2);
        text('$1300', 710, 1140);
        fill(hoverLight); 
      } else { 
        fill(a);
      }
      stroke(outlineColor);
      strokeWeight(3);
      rect(700, 1150, 120, 1300); // Non Student Apartment 2018 bar

      // Student Apartment 2013 Bar
      if(barHoverB === true) {
        textSize(40);
        noFill();
        strokeWeight(2);
        text('$1893', 1010, 547);
        fill(hoverDark); 
      } else { 
        fill(b);
      }
      stroke(outlineColor);
      strokeWeight(3);
      rect(1000, 557, 120, 1893); // Student Apartment 2013 bar

      // Student Apartment 2018 Bar
      if(barHoverD === true) { 
        textSize(40);
        noFill();
        strokeWeight(2);
        text('$2347', 1260, 93);
        fill(hoverDark); 
      } else { 
        fill(b);
      }
      stroke(outlineColor);
      strokeWeight(3);
      rect(1250, 103, 120, 2347); // Student Apartment 2018 bar

      mouseHover(); // Check for hover

      // Label for x-axis
      textSize(50);
      fill(a);
      stroke(outlineColor);
      strokeWeight(4);
      text(x, 580, 2600);

      // Label for 'Non Student Apartments'
      textSize(32);
      fill(a);
      stroke(a);
      strokeWeight(2);
      text(n, 480, 2530);

      // Year unit labels for 'Non Student Apartments'
      textSize(30);
      fill(176, 107, 74);
      stroke(176, 107, 74);
      strokeWeight(2);
      text(table.getString(i, 0), i * 250 + 480, 2485);

      // x-axis line
      fill(outlineColor);
      stroke(outlineColor);
      strokeWeight(3);
      line(300, 2450, 1530, 2450);

      // Assign values in column "Non Student Apartment"
      avgRent[i] = table.getString(i, 1);

      // Add label for 'Student Apartment'
      textSize(32);
      fill(a);
      stroke(a);
      strokeWeight(2);
      text(s, 1070, 2530);

      // Add year unit labels for 'Student Apartments'
      textSize(30);
      fill(176, 107, 74);
      stroke(176, 107, 74);
      strokeWeight(2);
      text(table.getString(j, 0), j * 250 + 1030, 2485);

      // Assign values in column "Student Apartment"
      avgRent[j] = table.getString(j, 2);

      // Label for y-axis
      textSize(50);
      fill(a);
      stroke(outlineColor);
      strokeWeight(4);

      // Rotate y-axis label
      push();
      let yAngle = radians(270);
      translate(150, 1500);
      rotate(yAngle);
      text(y, 0, 0);
      pop();

      // Find highest value and label y-axis
      maxRent = max(avgRent);
      maxNum = maxRent + 3 // add three so the number 2350 displays on the y-axis

      // Add number labels to y-axis
      for (var k = 0; k <= maxNum; k = k + 235) {
        textSize(30);
        fill(176, 107, 74)
        stroke(176, 107, 74);
        strokeWeight(2);
        text(k, 220, 2450 - k);

        line(300, 2450 - k, 300, 80); // Adjust y-axis line
      }
    }
  }
  pop();  // End scaling
}
