import hasPermission from "./permissions";
// import { USERS } from "./constant";

import { module1, PERMISSION_DELETE, ROLE_HEAD_TRANIER } from "./constant";
import {validateUser} from "./validation";

export default function callUtils(users) {
console.log(hasPermission(module1, ROLE_HEAD_TRANIER, PERMISSION_DELETE));

validateUser(users);
}
