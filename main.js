import {LinkedList}  from "./linkedLists.js";
import util from "util";
// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("hamster");
list.append("snake");
list.append("turtle");

console.log(util.inspect(list, { depth: null, colors: true }));
console.log(list.size())
console.log(list.head())
console.log(list.tail())
