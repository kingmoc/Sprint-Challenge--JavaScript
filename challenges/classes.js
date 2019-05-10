// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
	constructor(att) {
		this.length = att.length;
		this.width = att.width;
		this.height = att.height;
	}

	volume() {
		return this.length * this.width * this.height;
	}

	surfaceArea() {
		return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
	}
}

class CubeMaker extends CuboidMaker {
	constructor(att) {
		super(att) 
	}

	volume() {
		return Math.pow(this.length, 3)
	}

	surfaceArea() {
		return 6 * (Math.pow(this.length, 2))
	}
	
}

const cuboid = new CuboidMaker( {
	length: 4, 
	width: 5, 
	height: 5
  })

const cubeMath = new CubeMaker( {
	length: 8, 
	width: 8, 
	height: 8
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(cubeMath.volume()); // 512
console.log(cubeMath.surfaceArea()); // 384