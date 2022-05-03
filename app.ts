import axios from "axios";

import {userService} from "./services";
import {MyEnum} from "./enums";

// const getAllUsers = async () => {
//     const {data: users} = await userService.getAll();
//     // console.log(users.map(user => JSON.stringify(user)));
//     for (const user of users) {
//         // console.log(`${user.id} -- ${user.name}`)
//         console.log(JSON.stringify(user))
//     }
// };
//
// getAllUsers();
console.log(MyEnum.update);
console.log(MyEnum.add);
console.log(MyEnum.delete);
