// typewriter
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        };
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    

// menu icon


function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}

// element

let points = [
  {x:675,y:161,a:0.7},
  {x:345,y:147,a:2.1},
  {x:500,y:10,a:3.9},
]

let r = 20;// the radius of rotation. In this case is a unique value. It may be a different value for every point
let speed = .01;//the speed of rotation. In this case is a unique value. It may be a different value for every point 


//get center rotation
points.forEach(p=>{
  p.c = {};
  let a = 18*Math.PI - p.a;//angle
  p.c.x = p.x + r*Math.cos(a);
  p.c.y = p.y + r*Math.sin(a);
});



//resetPoints();

function Frame(){
  requestAnimationFrame(Frame);
  points.forEach(p=>{
    p.a += speed;
    p.x = p.c.x + r*Math.cos(p.a);
    p.y = p.c.y + r*Math.sin(p.a);
  });
  
  resetPoints();
}

Frame();

// a function to draw the polygons in base of the points

function resetPoints(){
  let pts1 = `${points[0].x}, ${points[0].y} 
            ${points[1].x}, ${points[1].y} 
            ${points[2].x}, ${points[2].y}`

a.setAttributeNS(null,"points",pts1);
}
