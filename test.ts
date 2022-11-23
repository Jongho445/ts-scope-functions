import { run, runWith } from "./ScopeFunctions";

const getUpper1 = (str: string) => run(() => str)
  .let(str => str.toUpperCase())
  .let(str => str.trim())
  .get();

const getUpper2 = (str: string | undefined = undefined) => runWith(str)
  .let(str => str?.toUpperCase())
  .let(str => str?.trim())
  .orElseGet("is not exist").get();

console.log(getUpper1("  haha"));
console.log(getUpper2());