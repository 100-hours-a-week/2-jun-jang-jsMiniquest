const Rectangle = require("./#1.js"); 

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

    isSquare() {
        return this.width === this.height;
    }
}

// 사용 예시
const square1 = new Square(5);
console.log(square1.area()); 
console.log(square1.perimeter()); 
console.log(square1.isSquare()); 

const rect1 = new Rectangle(10, 5);
console.log(rect1.isSquare ? rect1.isSquare() : "메서드 없음"); 
