// 1. Copy and paste your prototype in here and refactor into class syntax.

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

  class CuboidMaker {
      constructor(attr) {
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
      }
      volume() {
        return this.length * this.width * this.height
      }
      surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
      }
  }
  
      
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  })
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(`*** Cuboid Test ***`);
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130
  

  //Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

  class CubeMaker extends CuboidMaker {
    constructor(attr) {
    super(attr);

    }
  }

  const cuboidCopy = new CubeMaker({
    length: 20,
    width: 10,
    height: 18
  })

  const cuboidCopy1 = new CubeMaker({
    length: 70,
    width: 5,
    height: 3
  })

  const cuboidCopy2 = new CubeMaker({
    length: 100,
    width: 260,
    height: 6
  })

  const cuboidCopy3 = new CubeMaker({
    length: 35,
    width: 90,
    height: 100
  })
  console.log(`***CuboidCopy Test ***`);
  console.log(cuboidCopy.volume());
  console.log(cuboidCopy.surfaceArea());
  console.log(`**** CuboidCopy1 Test ***`);
  console.log(cuboidCopy1.volume());
  console.log(cuboidCopy1.surfaceArea());
  console.log(`*** CuboidCopy2 Test ***`);
  console.log(cuboidCopy2.volume());
  console.log(cuboidCopy2.surfaceArea());
  console.log(`*** CuboidCopy3 Test ***`);
  console.log(cuboidCopy3.volume());
  console.log(cuboidCopy3.surfaceArea());