import {add,subtract} from "./operation.mjs";
import User from "./userProfile.mjs";


console.log(add(2,3));
console.log(subtract(3,2));
const user=new User("jun",26);
console.log(user.name+ " "+user.age);