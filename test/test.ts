import { run, runWith } from "../src/scope_functions";
import Person from "./Person";

const person1 = run(new Person("john", 22)).also(({ name, age }) => {
  if (age < 20) console.log("미성년입니다");
});

const person2 = runWith(() => new Person("peter", 19)).let_(it => {
  return (it.age < 20) ? null : it;
}).orElseApply(() => {
  console.log("미성년입니다");
});

console.log(person1);
console.log(person2);