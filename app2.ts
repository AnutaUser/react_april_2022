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

// interface IUser {
//     id: number,
//     name: string,
//     age: number,
//     address: {
//         street: string,
//         house: number
//     }
// }

// interface IUser {
//     id: number,
//     name: string,
//     age: number,
//     address: IAddress,
//     arr: T[]
// }
//
// interface IAddress {
//     street: string,
//     house: number
// }
//
// const user: IUser = {id: 0, name:'Yeva', age:4, address:{street:'street', house:100}};
// const user2: Partial<IUser> = {name: 'Ira'};

// interface IUser<T> {
//     id: number,
//     name: string,
//     age: number,
//     arr: T[]
// }
//
// const user3: IUser<number>= {
//     id: 0,
//     name:'Yeva',
//     age:4,
//     arr: [1, 2, 3]
// };
//
// const user4: IUser<string>= {
//     id: 0,
//     name:'Yeva',
//     age:4,
//     arr: ['1', '2', '3']
// };

// type StateType = [string, (a: number, b: number) => number];
//
// const useState:StateType = ['text', (a:number, b: number) =>  {
//     return a + b;
// }];
//
// let [first, second] = useState;
//
// console.log(first);
// console.log(second(2, 3));
//
// interface IUser<T, N> {
//     id: number,
//     name: string,
//     arr: T[],
//     arr2: N[]
// }
//
// interface IMyArr {
//     arr: [number, string, IUser<number, string>]
// }
// const my:IMyArr = {
//     arr:[5, '5', {id:0, name:'Vasya', arr: [1, 2, 3], arr2:['a', 'b']}]
// }
// console.log(my);

// CLASS

// class User {
//     id?: number;
//     name: string;
//     age: number
//
//     constructor(id: number, name: string, age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
// }
// const user: User = {name: 'Ira', age: 12};

// class User {
//     constructor(private id: number, public name: string, public age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//     getId(): number {
//         return this.id
//     }
//
//     setId(newId: number): void {
//         this.id = newId;
//     }
// }
//
// const user: User = {name: 'Ira', id:2, age: 21};
//
// const user1 = new User(14, 'Ira', 34);
// user1.getId()

// class + interface

interface IShapesActions {
    area: () => number,
    perimeter: () => number
}

class Triangle implements IShapesActions {
    constructor(private a: number, private b: number, private c: number, private h: number) {
    }

    area(): number {
        return 0.5 * this.a * this.h;
    }

    perimeter(): number {
        return this.a + this.b + this.c;
    }

}

class Rectangle implements IShapesActions{
    constructor(private a: number, private b: number) {
    }
    area(): number {
        return this.a * this.b;
    }

    perimeter(): number {
        return 2*(this.a + this.b);
    }

}

const shapes: IShapesActions[] = [new Triangle(1,2,3,4), new Rectangle(4,2), new Rectangle(2,5)];

for (const shape of shapes) {

    console.log(shape.area());
    console.log(shape.perimeter());
}

const ssss: IShapesActions = new Triangle(1, 2, 3, 4);
console.log(ssss.area());

