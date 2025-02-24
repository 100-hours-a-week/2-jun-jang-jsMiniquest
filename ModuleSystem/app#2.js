import {add,subtract} from "./operation.js";
import User from "./userProfile.js";


console.log(add(2,3));
console.log(subtract(3,2));
const user=User("jun",26);
console.log(user.name+ " "+user.age);