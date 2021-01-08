// Create variables for accessing GUI objects
let s1, s2, s3, s4,s5, s6,sBG, s2d1;
// Create a variable for the gui context that we can use to change style
let gui;

var scl=10;
let rows, cols;
var inc=0.01;
var zoff=0;
var label1;
var particles=[];
var flowfield=[];
let spectral;
let labeltitolo;
let t;
let p5Canvas;


/* const capturer = new CCapture( {
	framerate: 30,
  verbose: true,
  format:'webm',
  name:'video',
  quality: 100
} );
 */
function preload() {
  spectral = loadFont('assets/font/Spectral/Spectral-Regular.ttf');
}


function setup()
 {
  print(windowWidth, windowHeight)

    p5Canvas=createCanvas(windowWidth,windowHeight);
    gui = createGui();
    gui.setTextSize(15);
    gui.setStrokeWeight(1);
    gui.setFont(spectral);
   // gui.setRounding(5); // Draws nice rounded corners.

    mobileLayout(); // <- uncomment for mobile layout  
    
    /* gui.setStrokeWeight(0);
    gui.setTrackWidth(2);
    gui.setRounding(0); */
     t=0;

     cols=floor(windowWidth/scl);
     rows=floor(windowHeight/scl);
     label1=createP('');
     label2=createP('');
     label3=createP('');
     label4=createP('');  
     label5=createP('');  
     label6=createP('');  
     label2d=createP('');   
     label1.class('label'); 
     label1.id('label1'); 
     label2.class('label'); 
     label2.id('label2'); 
     label3.class('label'); 
     label3.id('label3'); 
     label4.class('label'); 
     label4.id('label4'); 
     label5.class('label'); 
     label5.id('label5'); 
     label6.class('label'); 
     label6.id('label6'); 
     label2d.class('label'); 
     label2d.id('label2d'); 


     if(width>height){
       select('#label1').position(windowWidth*0.022,windowHeight*0.73);
     select('#label2').position( windowWidth*0.022, windowHeight*0.84);
     select('#label3').position( windowWidth*0.47, windowHeight*0.730);
     select('#label4').position( windowWidth*0.47, windowHeight*0.84);
     select('#label5').position( windowWidth*0.69, windowHeight*0.730);
     select('#label6').position( windowWidth*0.69, windowHeight*0.84);
     select('#label2d').position( windowWidth*0.837, windowHeight*0.73);
    
    }
    if(width<height){

      select('#label1').position(windowWidth*0.5,windowHeight*0.56);
      select('#label2').position( windowWidth*0.022, windowHeight*0.88);
      select('#label3').position( windowWidth*0.75, windowHeight*0.77);
      select('#label4').position( windowWidth*0.025, windowHeight*0.67);
      select('#label5').position( windowWidth*0.025, windowHeight*0.78);
      select('#label6').position( windowWidth*0.5, windowHeight*0.67);
      select('#label2d').position( windowWidth*0.48, windowHeight*0.82);
    
      
     }
     var particelle = 1700;
     for (var i=0; i<particelle; i++)
     {
       particles[i]= new Particle();
     }
}





function draw()
{
/*   if(frameCount === 1) capturer.start()
 */   

 background(255);
    
    var yoff=0;
    for(var y=0;  y<rows; y++)
    {
      var xoff=0;
      for(var x=0; x<cols;x++)
      {
        var index = x+y*cols;
        var r=noise(xoff,yoff)*255;
        var angle= noise(xoff,yoff,zoff)*TWO_PI*4;
        var v=p5.Vector.fromAngle(angle);
        v.setMag(s1.val);
        flowfield[index]=v;
        xoff+=inc;

       /*  fill(r);
        stroke(0);
        push();
        translate(x*scl, y*scl);
        rotate(v.heading());
        line(0,0,scl,0);
        pop(); */

        }
     yoff+=inc;
     zoff+=0.0005;
     



    }
  
    var r = 255 * noise(t+10)*2;
    var g = 255 * noise(t+15)*2;
    var b = 255 * noise(t+20)*2;     
    t=s4.val;
    
  
   for (var i=1; i<particles.length; i++)
    {
      var counterprev=i-1;
      strokeWeight(s3.val);
      stroke(r,g,b);
      line(particles[counterprev].pos.x , particles[counterprev].pos.y , particles[i].pos.x , particles[i].pos.y);
      particles[i].follow(flowfield);
      particles[i].update();
    

      particles[i].show();
      
      particles[i].edges();
      
      }

     /*  fill(sBG.val);
      stroke(255-sBG.val);
      strokeWeight(1);
      rect(windowWidth*0.02, windowHeight*0.08,windowWidth*0.43, windowHeight*0.05);
      rect(windowWidth*0.55, windowHeight*0.08,windowWidth*0.43, windowHeight*0.05);
      rect(windowWidth*0.2, windowHeight*0.08,windowWidth*0.6, windowHeight*0.05); */
 
    label1.html(s1.label);
    label2.html(s2.label);
    label3.html(s3.label);
    label4.html(s4.label);
    label5.html(s5.label);
    label6.html(s6.label);
    label2d.html(s2d1.label);

    s1.setStyle({
      fillBg: color(255),
      fillHandle : color(0),
      fillTrack : color(0),
      strokeHandle : color(0),
      strokeBg:color(0),
      strokeTrack :color(0),
      fillHandleHover : color(0),
      strokeHandleHover : color(0),
      fillTrackHover:color(0),
      strokeTrackHover :color(0),
      fillBgHover: color(255),
      strokeBgHover:color(0),
      strokeBgActive:color(0),
      fillTrackActive:color(0),
      strokeHandleActive:color(0),
      strokeTrackActive:color(0),
      fillBgActive: color(255)
}); 
    s1.setStyle({
      fillBg: color(255),
      fillHandle : color(0),
      fillTrack : color(0),
      strokeHandle : color(0),
      strokeBg:color(0),
      strokeTrack :color(0),
      fillHandleHover : color(0),
      strokeHandleHover : color(0),
      fillTrackHover:color(0),
      strokeTrackHover :color(0),
      fillBgHover: color(255),
      strokeBgHover:color(0),
      strokeBgActive:color(0),
      fillTrackActive:color(0),
      strokeHandleActive:color(0),
      strokeTrackActive:color(0),
      fillBgActive: color(255)
}); 
    s2.setStyle({
      fillBg: color(255),
      fillHandle : color(0),
      fillTrack : color(0),
      strokeHandle : color(0),
      strokeBg:color(0),
      strokeTrack :color(0),
      fillHandleHover : color(0),
      strokeHandleHover : color(0),
      fillTrackHover:color(0),
      strokeTrackHover :color(0),
      fillBgHover: color(255),
      strokeBgHover:color(0),
      strokeBgActive:color(0),
      fillTrackActive:color(0),
      strokeHandleActive:color(0),
      strokeTrackActive:color(0),
      fillBgActive: color(255)
}); 
    s3.setStyle({
      fillBg: color(255),
      fillHandle : color(0),
      fillTrack : color(0),
      strokeHandle : color(0),
      strokeBg:color(0),
      strokeTrack :color(0),
      fillHandleHover : color(0),
      strokeHandleHover : color(0),
      fillTrackHover:color(0),
      strokeTrackHover :color(0),
      fillBgHover: color(255),
      strokeBgHover:color(0),
      strokeBgActive:color(0),
      fillTrackActive:color(0),
      strokeHandleActive:color(0),
      strokeTrackActive:color(0),
      fillBgActive: color(255)
}); 
    s4.setStyle({
      fillBg: color(255),
      fillHandle : color(0),
      fillTrack : color(0),
      strokeHandle : color(0),
      strokeBg:color(0),
      strokeTrack :color(0),
      fillHandleHover : color(0),
      strokeHandleHover : color(0),
      fillTrackHover:color(0),
      strokeTrackHover :color(0),
      fillBgHover: color(255),
      strokeBgHover:color(0),
      strokeBgActive:color(0),
      fillTrackActive:color(0),
      strokeHandleActive:color(0),
      strokeTrackActive:color(0),
      fillBgActive: color(255)
}); 
    s5.setStyle({
      fillBg: color(255),
      fillHandle : color(0),
      fillTrack : color(0),
      strokeHandle : color(0),
      strokeBg:color(0),
      strokeTrack :color(0),
      fillHandleHover : color(0),
      strokeHandleHover : color(0),
      fillTrackHover:color(0),
      strokeTrackHover :color(0),
      fillBgHover: color(255),
      strokeBgHover:color(0),
      strokeBgActive:color(0),
      fillTrackActive:color(0),
      strokeHandleActive:color(0),
      strokeTrackActive:color(0),
      fillBgActive: color(255)
}); 
    s6.setStyle({
      fillBg: color(255),
      fillHandle : color(0),
      fillTrack : color(0),
      strokeHandle : color(0),
      strokeBg:color(0),
      strokeTrack :color(0),
      fillHandleHover : color(0),
      strokeHandleHover : color(0),
      fillTrackHover:color(0),
      strokeTrackHover :color(0),
      fillBgHover: color(255),
      strokeBgHover:color(0),
      strokeBgActive:color(0),
      fillTrackActive:color(0),
      strokeHandleActive:color(0),
      strokeTrackActive:color(0),
      fillBgActive: color(255)
}); 
    s2d1.setStyle({
      fillBg: color(255),
      fillHandle : color(0),
      fillTrack : color(0),
      strokeHandle : color(0),
      strokeBg:color(0),
      strokeTrack :color(0),
      fillHandleHover : color(0),
      strokeHandleHover : color(0),
      fillTrackHover:color(0),
      strokeTrackHover :color(0),
      fillBgHover: color(255),
      strokeBgHover:color(0),
      strokeBgActive:color(0),
      fillTrackActive:color(0),
      strokeHandleActive:color(0),
      strokeTrackActive:color(0),
      fillBgActive: color(255)
}); 


    drawGui();


    
// WHITE SFONDO CON SCRITTE NERE

    


}


// Creates a layout based on the resolution of the screen
function mobileLayout() {
  let w = windowWidth;
  let h = windowHeight;
  let ratio= w/h;
  if(ratio >= 1){  
s1 = createSlider("Magnitude", w*0.022, h*0.8, w*0.25, h*0.03, 0, 1);
s1.val = 0.5; 
s2 = createSlider("Particle Radius", w*0.022, h*0.9, w*0.42, h*0.03, 0, 85);  // Last two args are min and max
s2.val=10;
s3 = createSlider("Stroke Weight", w*0.47, h*0.80, w*0.12, h*0.03, 0,2);  // Last two args are min and max
s3.val = 0;
s4 = createSlider("HUE", w*0.47, h*0.9, w*0.16, h*0.03, 0,01);  // Last two args are min and max
s5 = createSlider("Vel multiplier", w*0.61, h*0.80, w*0.14, h*0.03, 0,15);  // Last two args are min and max
s4.val = 0;
s5.val = 2;
s6 = createSlider("Acc multiplier", w*0.65, h*0.9, w*0.1, h*0.03, 0,1);  // Last two args are min and max
s2d1 = createSlider2d("Flowfield direction", w*0.77, h*0.8, w*0.21, h*0.13, -2,2,-2,2);
s2d1.valY.isInteger = true;
s2d1.valX.isInteger = true;
/* sBG = createSlider("Background Brightness", w*0.3, h*0.8, w*0.14, h*0.03, 0, 255);
sBG.val=255; */


}
else{
  s1 = createSlider("Magnitude", w*0.5, h*0.62, w*0.45, h*0.04, 0, 1);
  s1.val = 0.5; 
  s2 = createSlider("Particle Radius", w*0.025, h*0.94, w*0.4, h*0.04, 0, 85);  // Last two args are min and max
  s2.val=5
  s3 = createSliderV("Stroke Weight", w*0.8 , h*0.83, w*0.15, h*0.15, 0,1);  // Last two args are min and max
  s3.val = 0;
  s4 = createSlider("HUE", w*0.025, h*0.73, w*0.45, h*0.04, 0,01);  // Last two args are min and max
  s5 = createSlider("Vel multiplier", w*0.025, h*0.84, w*0.4, h*0.04, 0,15);  // Last two args are min and max
  s4.val = 0;
  s5.val = 3;
  s6 = createSlider("Acc multiplier", w*0.5, h*0.73, w*0.45, h*0.04, 0,1);  // Last two args are min and max
  s2d1 = createSlider2d("Flowfield direction", w*0.46, h*0.88, w*0.28, h*0.1, -2,2,-2,2);
  s2d1.valY.isInteger = true;
  s2d1.valX.isInteger = true;
  sBG = createSlider("Background Brightness", w*0.03, h*0.62, w*0.45, h*0.04, 0, 255);
  /* sBG.val=255;
  bgtoggle = createToggle("Invert Colors", w*0.3, h*0.8, w*0.14, h*0.03); */

  }

  

}


