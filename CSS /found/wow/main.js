function setup(){
    createCanvas(600,600);
    angleMode(DEGREES);
    stroke(155, 193, 204);
    background(0)
  }
  function draw(){
    translate(width/2,height/2);
    stroke(155, 193, 204);
    fill(0,0,0,10)
    piriform(80,50,120,50,5)
    stroke(150, 132, 163)
    piriform(90,30,-80,20,5)
    stroke(158, 151, 145)
    piriform(-90,20,-80,10,5)
    
    //circle(x,y,10);
  }
  function piriform(a,b,c,d,r){
    a=a+c*sin(frameCount);
    b=b-d*sin(frameCount);
    rotate(frameCount/r)
    //t=frameCount;
    //background(250,250,255);
    beginShape()
    for(let t=0;t<361;t++ ){
      x	=	a*(1+sin(t))	
    y	=	b*cos(t)*(1+sin(t));
      vertex(y,x)
    }
    endShape(close)
  }