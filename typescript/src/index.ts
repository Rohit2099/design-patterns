import { User } from "./User";

var s: string = "Hello World";
console.log(s);

var user = new User("John", 30);
console.log(user.getName());
console.log(user.age);
console.log(User.count);
user.increment();
console.log(User.count);