import { run, runWith } from "./ScopeFunctions";

const getUpper = (str: string) => runWith(str)
  .let(str => str.toUpperCase())
  .let(str => str.trim())
  .get();

console.log(getUpper("  haha"));