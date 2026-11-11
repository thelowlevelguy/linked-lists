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
console.log("size:", list.size())
console.log("head:",list.head())
console.log("tail",list.tail())
console.log("at:",list.at(2))
console.log("pop:",list.pop())
console.log(util.inspect(list, {depth: null, colors: true}));
console.log("contains:",list.contains("cat"))
console.log("findIndex:",list.findIndex("turtle"))
console.log("toString:", list.toString())

