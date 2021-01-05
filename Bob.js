class Bob {
    constructor(x, y) {
       var options = {
          isStatic:false
       }
       this.r = 10;

       this.body = Bodies.circle(x, y, this.r, options);
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
 
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("red")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
 };
//  class Bob {
//     constructor(body1, body2, offsetX, offsetY) {
//         this.offsetX = offsetX
//         this.offsetY = offsetY
//         var options = {
//            bodyA:body1,
//            bodyB:body2,
//            pointB:{x:this.offsetX, y:this.offsetY}
//         }
//         this.rope = Constraint.create(options)
//         World.add(world, this.rope)
//      }
//      display(){
//          var pos = this.body.position;
//          var angle = this.body.angle;
  
//          push();
//          translate(pos.x, pos.y);
//          rotate(angle);
//          imageMode(CENTER);
//          noStroke();
//          fill("red")
//          ellipseMode(RADIUS);
//          ellipse(0, 0, this.r, this.r);
//          pop();
//      }
//   };
// //   class Stone{
// //     constructor(x, y, r) {
// //         var options = {
//             'restitution':0.0,
//             'friction':1.0,
//            isStatic:false
//         }
       
//         this.r = r;
//         this.image = loadImage("stone.png");
//         this.body = Bodies.circle(x, y, r, options);
//         World.add(world, this.body);
//       }
//       display(){
//         var angle = this.body.angle;
//         push();
//         translate(this.body.position.x, this.body.position.y);
//         ellipseMode(RADIUS);
//         ellipse(0, 0, this.r, this.r);
//         pop();
//       }
// }