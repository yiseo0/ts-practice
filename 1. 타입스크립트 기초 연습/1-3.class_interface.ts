// 1-3. inerface 사용하기(클래스)

// interface 생성
interface Shape {
   getArea(): number;
   // Shape interface에는 getArea라는 함수가 꼭 있어야하며,
   // 해당 함수의 반환 값은 숫자
}

// interface implement하기
// `implements` 키워드를 사용하여 해당 클래스가 shape interface의 조건에 충족한지 명시
// public accessor 클래스 외부에서 접근 O
// private accessor 클래스 외부에서 접근 X
class Circle implements Shape {
   // radius : number; // 멤버 변수 radius 타입 설정
   //    constructor(radius: number) {
   constructor(public radius: number) {
      this.radius = radius;
   }
   getArea() {
      return this.radius * this.radius * Math.PI;
   }
}

class Rectangle implements Shape {
   // width: number;
   // height: number;
   // constructor(width: number, height: number) {
   constructor(private width: number, private height: number) {
      this.width = width;
      this.height = height;
   }
   getArea() {
      return this.width * this.height
   }
}

// public / private accessor 테스트
// const circle = new Circle(5)
// const rectangle = new Rectangle(10, 5)
// console.log(circle.radius)
// console.log(rectangle.width) // error

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
   console.log(shape.getArea())
})