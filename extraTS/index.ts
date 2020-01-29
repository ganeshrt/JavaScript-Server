import callPatterns, {  } from "./patterns/index";
import callUtils from "./utils";
import { USERS } from "./utils/constant";

// const numOfRow=argv[2];
const arg = process.argv.slice(2);
const numOfRow = arg[0];

callPatterns(numOfRow);
callUtils(USERS);
