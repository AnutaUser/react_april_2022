// import {IObject} from "./interfaces";
import {IMission} from "./interfaces";

import {missionsService, usersService} from "./srvices";

// const object: IObject = {
//     "mission_name": "Starlink-15 (v1.0)",
//     "launch_date_local": "2020-10-24T11:31:00-04:00",
//     "launch_site": {
//         "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//     },
//     "links": {
//         "article_link": null,
//         "video_link": "https://youtu.be/J442-ti-Dhg"
//     },
//     "rocket": {
//         "rocket_name": "Falcon 9",
//         "first_stage": {
//             "cores": [
//                 {
//                     "flight": 7,
//                     "core": {
//                         "reuse_count": 6,
//                         "status": "unknown"
//                     }
//                 }
//             ]
//         },
//         "second_stage": {
//             "payloads": [
//                 {
//                     "payload_type": "Satellite",
//                     "payload_mass_kg": 15400,
//                     "payload_mass_lbs": 33951.2
//                 }
//             ]
//         }
//     }
// };
//
// console.log(object);
// console.log(object.rocket.first_stage.cores);


///////////////////////////////////////////////////
// const mission: IMission = {
//     "mission_name": "Iridium NEXT",
//     "mission_id": "F3364BF",
//     "manufacturers": [
//     "Orbital ATK"
// ],
//     "payload_ids": [
//     "Iridium NEXT 1",
//     "Iridium NEXT 2",
//     "Iridium NEXT 3",
//     "Iridium NEXT 4",
//     "Iridium NEXT 5",
//     "Iridium NEXT 6",
//     "Iridium NEXT 7"
// ],
//     "wikipedia": "https://en.wikipedia.org/wiki/Iridium_satellite_constellation",
//     "website": "https://www.iridiumnext.com/",
//     "twitter": "https://twitter.com/IridiumBoss?lang=en",
//     "description": "In 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites, consisting of 66 active satellites, with another nine in-orbit spares and six on-ground spares. These satellites will incorporate features such as data transmission that were not emphasized in the original design. The constellation will provide L-band data speeds of up to 128 kbit/s to mobile terminals, up to 1.5 Mbit/s to Iridium Pilot marine terminals, and high-speed Ka-band service of up to 8 Mbit/s to fixed/transportable terminals. The next-generation terminals and service are expected to be commercially available by the end of 2018. However, Iridium's proposed use of its next-generation satellites has raised concerns the service will harmfully interfere with GPS devices. The satellites will incorporate a secondary payload for Aireon, a space-qualified ADS-B data receiver. This is for use by air traffic control and, via FlightAware, for use by airlines. A tertiary payload on 58 satellites is a marine AIS ship-tracker receiver, for Canadian company exactEarth Ltd. Iridium can also be used to provide a data link to other satellites in space, enabling command and control of other space assets regardless of the position of ground stations and gateways."
// }
// const getAllMissions = async () => {
//     const {data: missions} = await missionsService.getAll();
//     missions.map(mission => console.log(mission.mission_id, mission.mission_name));
//     // console.log(missions);
// };
//
// getAllMissions();
//
// const getMissionById = async () => {
//     const {data: mission} = await missionsService.getById(2);
//     console.log(mission);
// }
// getMissionById();

//////////////////////////////////////////////////////////////////////////////////////////////
// 2) протипизировать функции:

//  export interface IUser {
//     name: string;
//     age: number,
//     gender: string
// }
// const user:IUser = {
//     name: "Max",
//     age: 18,
//     gender: 'male'
// };
//
// function sum(a: number, b: number): number {
//     return a + b
// }
//
// const showSum = (a: number, b: number): void => {
//     console.log(a + b);
// }
//
// const incAge = (someUser: IUser, inc: number): IUser => {
//     someUser.age += inc;
//     return someUser;
// };
//
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)

////////////////////////////////////////////////////////////////////////////////////////////
//
// type Name = 'Anya' | 'Ira' | 'Petro' | 'Ivan' | 'Max' | 'Kira';
//
// interface IUser {
//     id?: number;
//     name: Name;
//     age: number;
//     status: boolean
// }
//
// const user: IUser = {name: 'Anya', age: 25, status: true};
//
// const user2: Partial<IUser> = {name: 'Ira'};
//
// const user3:Required<IUser> ={name: 'Ivan', age: 20, status: false, id:3}
//
// interface IUser2 extends IUser {
//     address: string
// }
//
// const user4: IUser2 = {name: 'Kira', id: 4, status: true, age: 18, address: 'Vyshnevckogo'};

/////////////////////////////////////////////////////////////////////////

// const getAllUsers = async ()=> {
//     const {data: users} = await usersService.getAll();
//     users.map(user => console.log(user.id, user.name));
//
// }
//
// getAllUsers();

// const getUserById = async ()=> {
//     const {data: user} = await usersService.getById(10);
//     console.log(user.id, user.name, user.address.geo.lng)
//
// }
// getUserById();

