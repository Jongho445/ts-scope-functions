import { run } from "./ScopeFunctions";

const str1 = run(null)
  .orElseGet("is not exist")

const str2 = run("hello").also_(it => {
  console.log(`it is ${it}`);
}).orElseGet("is not exist");

const upper = run("hello").let(it => {
  return it.toUpperCase()
});

console.log(str1);
console.log(str2);
console.log(upper);