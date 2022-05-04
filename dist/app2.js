// const show = (arr: object[]): object => {
//     return arr
// };
//
// const show1 = (a:number, b: number): number|string|[]|{} => {
//     return {}
// };
//
// const user = {name: 'Max', age: 20};
//
// const showUser = (user: {name: string, age: number}) => {
//     user.age
// };
//
// const user: { name: string, age: number; } = {name: 'Olya', age: 21};
//
// console.log(user, show);
class Triangle {
    constructor(a, b, c, h) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.h = h;
    }
    area() {
        return 0.5 * this.a * this.h;
    }
    perimeter() {
        return this.a + this.b + this.c;
    }
}
class Rectangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    area() {
        return this.a * this.b;
    }
    perimeter() {
        return 2 * (this.a + this.b);
    }
}
const shapes = [new Triangle(1, 2, 3, 4), new Rectangle(4, 2), new Rectangle(2, 5)];
for (const shape of shapes) {
    console.log(shape.area());
    console.log(shape.perimeter());
}
const ssss = new Triangle(1, 2, 3, 4);
console.log(ssss.area());
//# sourceMappingURL=app2.js.map