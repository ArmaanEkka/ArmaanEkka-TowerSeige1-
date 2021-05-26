class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointA = pointA
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
    
}